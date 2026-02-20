'use client'

import { useEffect } from 'react'

interface WebMCPToolRegistrationProps {
    toolName: string
    toolDescription: string
    toolPath: string
    toolCategory?: string
}

// ── Utility: set value on React-controlled inputs ────────────────

function setNativeValue(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, value: string) {
    const prototype = el instanceof HTMLSelectElement
        ? HTMLSelectElement.prototype
        : el instanceof HTMLTextAreaElement
            ? HTMLTextAreaElement.prototype
            : HTMLInputElement.prototype

    const nativeSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set
    if (nativeSetter) {
        nativeSetter.call(el, value)
    } else {
        el.value = value
    }

    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
}

// ── Types ────────────────────────────────────────────────────────

interface DiscoveredField {
    type: string
    element: Element
    label: string
    placeholder: string
    options?: string[]
    currentValue?: string
}

type InteractionMode = 'realtime' | 'button-click' | 'generator' | 'file-upload' | 'auto'

// ── Label discovery ──────────────────────────────────────────────

function findLabelFor(el: Element, container: Element): string {
    // 1. data-slot="label" inside same parent group
    const parent = el.closest('[class*="space-y"], [class*="flex"], [class*="grid"], .group')
    if (parent) {
        const slotLabel = parent.querySelector('[data-slot="label"]')
        if (slotLabel && slotLabel.textContent?.trim()) return slotLabel.textContent.trim()
    }

    // 2. <label for="id">
    if (el.id) {
        const label = container.querySelector<HTMLLabelElement>(`label[for="${el.id}"]`)
        if (label) return label.textContent?.trim() || ''
    }

    // 3. Parent <label>
    const parentLabel = el.closest('label')
    if (parentLabel) return parentLabel.textContent?.trim() || ''

    // 4. Preceding sibling label
    const prev = el.parentElement?.previousElementSibling
    if (prev?.tagName === 'LABEL' || prev?.querySelector?.('[data-slot="label"]')) {
        return prev.textContent?.trim() || ''
    }

    // 5. aria-label
    const ariaLabel = el.getAttribute('aria-label')
    if (ariaLabel) return ariaLabel

    return ''
}

// ── Field discovery ──────────────────────────────────────────────

function discoverToolFields(toolEl: Element): Record<string, DiscoveredField> {
    const fields: Record<string, DiscoveredField> = {}

    // Standard <input> elements (not hidden, not file, not checkbox)
    const inputs = toolEl.querySelectorAll<HTMLInputElement>(
        'input:not([type="hidden"]):not([type="checkbox"]):not([type="file"]):not([aria-hidden="true"])'
    )
    inputs.forEach((input) => {
        const key = input.id || input.name || input.placeholder || `input_${Object.keys(fields).length}`
        fields[key] = {
            type: input.type || 'text',
            element: input,
            label: findLabelFor(input, toolEl) || input.placeholder || key,
            placeholder: input.placeholder || '',
            currentValue: input.value || undefined,
        }
    })

    // <textarea> elements
    const textareas = toolEl.querySelectorAll<HTMLTextAreaElement>('textarea')
    textareas.forEach((textarea) => {
        const key = textarea.id || textarea.name || `textarea_${Object.keys(fields).length}`
        fields[key] = {
            type: 'textarea',
            element: textarea,
            label: findLabelFor(textarea, toolEl) || textarea.placeholder || key,
            placeholder: textarea.placeholder || '',
            currentValue: textarea.value || undefined,
        }
    })

    // Native <select> elements
    const selects = toolEl.querySelectorAll<HTMLSelectElement>('select:not([aria-hidden="true"])')
    selects.forEach((select) => {
        const key = select.id || select.name || `select_${Object.keys(fields).length}`
        const options = Array.from(select.options).map(o => o.value).filter(Boolean)
        fields[key] = {
            type: 'select',
            element: select,
            label: findLabelFor(select, toolEl) || key,
            placeholder: '',
            options,
            currentValue: select.value || undefined,
        }
    })

    // Radix UI GSelect → renders as <button data-slot="select-trigger">
    const radixSelects = toolEl.querySelectorAll<HTMLButtonElement>('[data-slot="select-trigger"]')
    radixSelects.forEach((trigger) => {
        const label = findLabelFor(trigger, toolEl)
        const key = label
            ? label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
            : `radix_select_${Object.keys(fields).length}`

        // Current displayed value
        const valueEl = trigger.querySelector('[data-slot="select-value"]')
        const currentValue = valueEl?.textContent?.trim() || trigger.textContent?.trim() || ''

        fields[key] = {
            type: 'radix-select',
            element: trigger,
            label: label || key,
            placeholder: '',
            currentValue: currentValue || undefined,
        }
    })

    // Switch elements → <button role="switch" data-state="checked|unchecked">
    const switches = toolEl.querySelectorAll<HTMLButtonElement>('button[role="switch"]')
    switches.forEach((sw) => {
        const label = findLabelFor(sw, toolEl)
        const key = label
            ? label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
            : `switch_${Object.keys(fields).length}`
        fields[key] = {
            type: 'switch',
            element: sw,
            label: label || key,
            placeholder: '',
            currentValue: sw.getAttribute('data-state') === 'checked' ? 'true' : 'false',
        }
    })

    // Checkbox elements → <button role="checkbox" data-state="checked|unchecked">
    const checkboxes = toolEl.querySelectorAll<HTMLButtonElement>('button[role="checkbox"]')
    checkboxes.forEach((cb) => {
        const label = findLabelFor(cb, toolEl)
        const key = label
            ? label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
            : `checkbox_${Object.keys(fields).length}`
        fields[key] = {
            type: 'checkbox',
            element: cb,
            label: label || key,
            placeholder: '',
            currentValue: cb.getAttribute('data-state') === 'checked' ? 'true' : 'false',
        }
    })

    return fields
}

// ── Toggle button group discovery ────────────────────────────────

function findToggleGroups(toolEl: Element): { label: string; buttons: HTMLButtonElement[]; currentValue: string }[] {
    const groups: { label: string; buttons: HTMLButtonElement[]; currentValue: string }[] = []

    // Look for common toggle group patterns: sibling buttons in a flex container
    const containers = toolEl.querySelectorAll('[role="radiogroup"], [role="tablist"]')
    containers.forEach((container) => {
        const buttons = Array.from(container.querySelectorAll<HTMLButtonElement>('button'))
        if (buttons.length >= 2) {
            const label = findLabelFor(container, toolEl)
            const activeBtn = buttons.find(
                (b) => b.getAttribute('data-state') === 'on' || b.getAttribute('aria-checked') === 'true' || b.classList.contains('bg-primary')
            )
            groups.push({
                label: label || `toggle_group_${groups.length}`,
                buttons,
                currentValue: activeBtn?.textContent?.trim() || '',
            })
        }
    })

    return groups
}

// ── Interaction mode detection ───────────────────────────────────

function detectInteractionMode(toolEl: Element): InteractionMode {
    // Check for data-interaction-mode attribute (set from schema registry)
    const modeAttr = toolEl.getAttribute('data-interaction-mode')
    if (modeAttr && modeAttr !== 'auto') return modeAttr as InteractionMode

    // File upload check
    const fileInputs = toolEl.querySelectorAll('input[type="file"]')
    if (fileInputs.length > 0) return 'file-upload'

    const fields = discoverToolFields(toolEl)
    const hasTextInputs = Object.values(fields).some(
        (f) => f.type === 'text' || f.type === 'number' || f.type === 'textarea' || f.type === 'date'
    )
    const buttons = findActionButtons(toolEl)
    const hasActionButton = buttons.length > 0

    if (!hasTextInputs && hasActionButton) return 'generator'
    if (hasTextInputs && !hasActionButton) return 'realtime'
    if (hasTextInputs && hasActionButton) return 'button-click'

    return 'auto'
}

// ── Action button discovery ──────────────────────────────────────

function findActionButtons(toolEl: Element): HTMLButtonElement[] {
    const buttons = toolEl.querySelectorAll<HTMLButtonElement>('button')
    const actionKeywords = [
        'calculate', 'convert', 'generate', 'encode', 'decode',
        'hash', 'encrypt', 'decrypt', 'analyze', 'check', 'create',
        'submit', 'search', 'format', 'compress', 'merge', 'split',
        'extract', 'download', 'predict', 'save', 'apply',
    ]

    return Array.from(buttons).filter(btn => {
        const text = (btn.textContent || '').toLowerCase()
        // Exclude toggle/select/switch buttons
        if (btn.getAttribute('role') === 'switch') return false
        if (btn.getAttribute('role') === 'checkbox') return false
        if (btn.getAttribute('data-slot') === 'select-trigger') return false
        if (btn.getAttribute('role') === 'radio') return false
        if (btn.getAttribute('role') === 'tab') return false
        return actionKeywords.some(kw => text.includes(kw)) && !btn.disabled
    })
}

// ── Result reading (multi-strategy) ──────────────────────────────

function readToolResults(toolEl: Element): string {
    const MAX_CHARS = 2000

    // Strategy 1: Explicit data-webmcp-result marker (future-proof)
    const explicit = toolEl.querySelector('[data-webmcp-result]')
    if (explicit?.textContent?.trim()) {
        return explicit.textContent.trim().slice(0, MAX_CHARS)
    }

    // Strategy 2: role="status" (accessibility standard)
    const status = toolEl.querySelector('[role="status"]')
    if (status?.textContent?.trim()) {
        return status.textContent.trim().slice(0, MAX_CHARS)
    }

    // Strategy 3: Readonly inputs/textareas (UUID generator, base64 output)
    const readonlyEls = toolEl.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'textarea[readonly], input[readonly], textarea[disabled], input[disabled]'
    )
    const readonlyValues: string[] = []
    readonlyEls.forEach((el) => {
        if (el.value?.trim()) readonlyValues.push(el.value.trim())
    })
    if (readonlyValues.length > 0) {
        return readonlyValues.join('\n').slice(0, MAX_CHARS)
    }

    // Strategy 4: Animated result cards
    const animated = toolEl.querySelector('[class*="animate-fade"], [class*="animate-in"]')
    if (animated?.textContent?.trim()) {
        return animated.textContent.trim().slice(0, MAX_CHARS)
    }

    // Strategy 5: Result-highlighted borders
    const highlighted = toolEl.querySelector('[class*="border-primary"]')
    if (highlighted?.textContent?.trim()) {
        return highlighted.textContent.trim().slice(0, MAX_CHARS)
    }

    // Strategy 6: Common result containers by class name
    const resultSelectors = [
        '[class*="result"]',
        '[class*="output"]',
        '[data-result]',
    ]
    for (const selector of resultSelectors) {
        const resultEl = toolEl.querySelector(selector)
        if (resultEl?.textContent?.trim()) {
            return resultEl.textContent.trim().slice(0, MAX_CHARS)
        }
    }

    // Strategy 7: Card content elements that DON'T contain inputs (result cards)
    const allCards = toolEl.querySelectorAll('[data-slot="card-content"]')
    for (const card of allCards) {
        const hasInputs = card.querySelector('input, textarea, select, [data-slot="select-trigger"]')
        if (!hasInputs && card.textContent?.trim() && card.textContent.trim().length > 10) {
            return card.textContent.trim().slice(0, MAX_CHARS)
        }
    }

    // Strategy 8: Fallback — any card with substantial text
    const cards = toolEl.querySelectorAll('[class*="CardContent"], [class*="card-content"]')
    for (const card of cards) {
        const text = card.textContent?.trim()
        if (text && text.length > 20) return text.slice(0, MAX_CHARS)
    }

    return ''
}

// ── Fill handler for all field types ─────────────────────────────

async function fillField(field: DiscoveredField, value: string, toolEl: Element): Promise<string> {
    const el = field.element

    switch (field.type) {
        case 'text':
        case 'number':
        case 'date':
        case 'textarea': {
            const inputEl = el as HTMLInputElement | HTMLTextAreaElement
            setNativeValue(inputEl, value)
            inputEl.focus()
            inputEl.dispatchEvent(new Event('blur', { bubbles: true }))
            return `Set ${field.label} = "${value}"`
        }

        case 'select': {
            const selectEl = el as HTMLSelectElement
            setNativeValue(selectEl, value)
            return `Selected ${field.label} = "${value}"`
        }

        case 'radix-select': {
            // Click the trigger to open the dropdown
            const trigger = el as HTMLButtonElement
            trigger.click()
            await new Promise(r => setTimeout(r, 150))

            // Find matching item in the portal (Radix renders select items in a portal)
            const allItems = document.querySelectorAll('[data-slot="select-item"]')
            let matched = false
            for (const item of allItems) {
                const itemText = item.textContent?.trim().toLowerCase() || ''
                if (itemText === value.toLowerCase() || itemText.includes(value.toLowerCase())) {
                    ;(item as HTMLElement).click()
                    matched = true
                    break
                }
            }

            await new Promise(r => setTimeout(r, 100))

            if (!matched) {
                // Close the dropdown by pressing Escape
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
                return `Could not find option "${value}" in ${field.label}`
            }
            return `Selected ${field.label} = "${value}"`
        }

        case 'switch':
        case 'checkbox': {
            const btn = el as HTMLButtonElement
            const currentState = btn.getAttribute('data-state') === 'checked'
            const targetState = value === 'true' || value === '1' || value === 'on' || value === 'checked'
            if (currentState !== targetState) {
                btn.click()
                await new Promise(r => setTimeout(r, 50))
            }
            return `Set ${field.label} = ${targetState ? 'on' : 'off'}`
        }

        default:
            return `Unknown field type: ${field.type}`
    }
}

async function fillToggleGroup(
    toolEl: Element,
    groupLabel: string,
    value: string
): Promise<string | null> {
    const groups = findToggleGroups(toolEl)
    const normalizedLabel = groupLabel.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')

    for (const group of groups) {
        const gLabel = group.label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')
        if (gLabel === normalizedLabel || gLabel.includes(normalizedLabel) || normalizedLabel.includes(gLabel)) {
            const target = group.buttons.find(
                (btn) => btn.textContent?.trim().toLowerCase() === value.toLowerCase()
            )
            if (target) {
                target.click()
                await new Promise(r => setTimeout(r, 50))
                return `Toggled ${group.label} = "${value}"`
            }
            return `Option "${value}" not found in ${group.label}. Available: ${group.buttons.map(b => b.textContent?.trim()).join(', ')}`
        }
    }
    return null
}

// ── Main registration component ──────────────────────────────────

export function WebMCPToolRegistration({
    toolName,
    toolDescription,
    toolPath,
    toolCategory,
}: WebMCPToolRegistrationProps) {
    useEffect(() => {
        if (typeof navigator === 'undefined') return
        if (!navigator.modelContext) return

        const mc = navigator.modelContext

        const slugifiedName = toolName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '')

        const register = () => {
            try {
                // ── Tool 1: Describe available fields ────────────────
                mc.registerTool({
                    name: `${slugifiedName}__describe`,
                    description: `Discover the input fields and controls available in ${toolName}. Call this first to understand what inputs the tool accepts before filling them.`,
                    handler: async () => {
                        const toolEl = document.querySelector('[data-webmcp-tool]')
                        if (!toolEl) return { success: false, error: 'Tool region not found' }

                        const fields = discoverToolFields(toolEl)
                        const toggleGroups = findToggleGroups(toolEl)
                        const buttons = findActionButtons(toolEl)
                        const interactionMode = detectInteractionMode(toolEl)

                        const fieldDescriptions = Object.entries(fields).map(([key, f]) => ({
                            id: key,
                            type: f.type,
                            label: f.label,
                            placeholder: f.placeholder,
                            ...(f.options ? { options: f.options } : {}),
                            ...(f.currentValue ? { currentValue: f.currentValue } : {}),
                        }))

                        const toggleDescriptions = toggleGroups.map(g => ({
                            id: g.label.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, ''),
                            type: 'toggle-group',
                            label: g.label,
                            options: g.buttons.map(b => b.textContent?.trim() || ''),
                            currentValue: g.currentValue,
                        }))

                        const buttonDescriptions = buttons.map(btn => ({
                            text: btn.textContent?.trim() || '',
                            type: btn.type || 'button',
                        }))

                        const modeInstructions: Record<string, string> = {
                            'realtime': `This tool updates results in real-time as you type. After filling fields, skip __click and go straight to __results (wait ~300ms).`,
                            'button-click': `After filling fields, call __click to trigger the calculation, then __results to read output.`,
                            'generator': `Call __click to generate output (no text inputs needed), then __results to read it.`,
                            'file-upload': `This tool requires file upload which cannot be done programmatically. Guide the user to upload a file manually.`,
                            'auto': `Call __fill to set values, then __click to trigger action, then __results to read output.`,
                        }

                        return {
                            success: true,
                            tool: toolName,
                            path: toolPath,
                            interactionMode,
                            fields: [...fieldDescriptions, ...toggleDescriptions],
                            buttons: buttonDescriptions,
                            instructions: modeInstructions[interactionMode] || modeInstructions['auto'],
                        }
                    },
                })

                // ── Tool 2: Fill in field values ─────────────────────
                mc.registerTool({
                    name: `${slugifiedName}__fill`,
                    description: `Fill in input values for ${toolName}. Pass an object where keys are field IDs (from describe) and values are the data to enter. Example: {"weight": "70", "height": "175"}`,
                    inputSchema: {
                        type: 'object',
                        properties: {
                            values: {
                                type: 'string',
                                description: `JSON object of field ID → value pairs. Get field IDs by calling ${slugifiedName}__describe first.`,
                            },
                        },
                    },
                    handler: async (input) => {
                        const toolEl = document.querySelector('[data-webmcp-tool]')
                        if (!toolEl) return { success: false, error: 'Tool region not found' }

                        const fields = discoverToolFields(toolEl)
                        let values: Record<string, string> = {}

                        try {
                            values = typeof input?.values === 'string'
                                ? JSON.parse(input.values)
                                : (input?.values as Record<string, string>) || {}
                        } catch {
                            // If input is passed as direct key-value pairs
                            values = (input || {}) as Record<string, string>
                        }

                        const filled: string[] = []
                        const errors: string[] = []

                        for (const [key, value] of Object.entries(values)) {
                            const field = fields[key]
                            if (field) {
                                try {
                                    const result = await fillField(field, String(value), toolEl)
                                    filled.push(result)
                                } catch {
                                    errors.push(`Failed to set ${key}`)
                                }
                            } else {
                                // Try toggle groups
                                const toggleResult = await fillToggleGroup(toolEl, key, String(value))
                                if (toggleResult) {
                                    filled.push(toggleResult)
                                } else {
                                    errors.push(`Field "${key}" not found. Available: ${Object.keys(fields).join(', ')}`)
                                }
                            }
                        }

                        const interactionMode = detectInteractionMode(toolEl)
                        const hint = interactionMode === 'realtime'
                            ? `Results update automatically. Wait ~300ms then call ${slugifiedName}__results.`
                            : `Now call ${slugifiedName}__click to trigger the calculation, then ${slugifiedName}__results.`

                        return {
                            success: filled.length > 0,
                            filled,
                            errors: errors.length > 0 ? errors : undefined,
                            hint,
                        }
                    },
                })

                // ── Tool 3: Click the action button ──────────────────
                mc.registerTool({
                    name: `${slugifiedName}__click`,
                    description: `Click the main action button (Calculate, Convert, Generate, etc.) in ${toolName} to process the inputs and produce results.`,
                    handler: async () => {
                        const toolEl = document.querySelector('[data-webmcp-tool]')
                        if (!toolEl) return { success: false, error: 'Tool region not found' }

                        const interactionMode = detectInteractionMode(toolEl)

                        // Realtime tools: no button needed, just wait and read
                        if (interactionMode === 'realtime') {
                            await new Promise(r => setTimeout(r, 300))
                            const results = readToolResults(toolEl)
                            return {
                                success: true,
                                message: 'This is a realtime tool — results are already calculated.',
                                results: results || 'No results visible. Ensure inputs are filled.',
                            }
                        }

                        // File-upload tools: can't click programmatically
                        if (interactionMode === 'file-upload') {
                            return {
                                success: false,
                                message: 'This tool requires file upload. Please ask the user to upload a file manually.',
                            }
                        }

                        const buttons = findActionButtons(toolEl)
                        if (buttons.length === 0) {
                            // Fallback: try reading results anyway (may be auto-calculated)
                            await new Promise(r => setTimeout(r, 300))
                            const results = readToolResults(toolEl)
                            return {
                                success: true,
                                message: 'No action button found — results may calculate automatically.',
                                results: results || 'No results visible yet.',
                            }
                        }

                        buttons[0].click()

                        // Wait time depends on tool type
                        const waitTime = interactionMode === 'generator' ? 500 : 800
                        await new Promise(r => setTimeout(r, waitTime))

                        const results = readToolResults(toolEl)
                        return {
                            success: true,
                            buttonClicked: buttons[0].textContent?.trim(),
                            results: results || 'Results may still be loading. Call __results in a moment.',
                        }
                    },
                })

                // ── Tool 4: Read results ─────────────────────────────
                mc.registerTool({
                    name: `${slugifiedName}__results`,
                    description: `Read the current output/results displayed by ${toolName}. Call this after filling inputs and clicking the action button.`,
                    handler: async () => {
                        const toolEl = document.querySelector('[data-webmcp-tool]')
                        if (!toolEl) return { success: false, error: 'Tool region not found' }

                        const results = readToolResults(toolEl)
                        const fields = discoverToolFields(toolEl)

                        // Capture current field values as context
                        const currentValues: Record<string, string> = {}
                        for (const [key, field] of Object.entries(fields)) {
                            const val = field.currentValue
                                || (field.element as HTMLInputElement).value
                                || undefined
                            if (val) currentValues[key] = val
                        }

                        return {
                            success: true,
                            tool: toolName,
                            currentInputs: currentValues,
                            results: results || 'No results visible yet. Ensure inputs are filled and the action button has been clicked.',
                        }
                    },
                })

            } catch {
                if (process.env.NODE_ENV === 'development') {
                    console.warn('[WebMCP] Registration failed for:', toolName)
                }
            }
        }

        if ('requestIdleCallback' in window) {
            const id = requestIdleCallback(register, { timeout: 3000 })
            return () => {
                cancelIdleCallback(id)
                try {
                    mc.unregisterTool(`${slugifiedName}__describe`)
                    mc.unregisterTool(`${slugifiedName}__fill`)
                    mc.unregisterTool(`${slugifiedName}__click`)
                    mc.unregisterTool(`${slugifiedName}__results`)
                } catch { /* silent */ }
            }
        } else {
            const id = setTimeout(register, 1)
            return () => {
                clearTimeout(id)
                try {
                    mc.unregisterTool(`${slugifiedName}__describe`)
                    mc.unregisterTool(`${slugifiedName}__fill`)
                    mc.unregisterTool(`${slugifiedName}__click`)
                    mc.unregisterTool(`${slugifiedName}__results`)
                } catch { /* silent */ }
            }
        }
    }, [toolName, toolDescription, toolPath, toolCategory])

    return null
}
