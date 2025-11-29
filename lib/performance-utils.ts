/**
 * Performance utilities for breaking up long tasks and improving INP
 * These utilities help reduce main-thread blocking time
 */

/**
 * Yield to main thread - breaks up long tasks
 * Use this to give the browser a chance to handle user interactions
 */
export function yieldToMain(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

/**
 * Debounce function - delays execution until after wait time has elapsed
 * Useful for expensive operations triggered by user input
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Throttle function - ensures function is called at most once per interval
 * Useful for scroll/resize handlers
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Request Idle Callback polyfill for older browsers
 * Runs low-priority work when browser is idle
 */
export function requestIdleCallback(callback: () => void): void {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    } else {
        setTimeout(callback, 1);
    }
}

/**
 * Prefetch a URL in the background
 * Useful for anticipating user navigation
 */
export function prefetchUrl(url: string): void {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
}

/**
 * Preconnect to a domain
 * Establishes early connection to improve resource loading
 */
export function preconnect(url: string): void {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
}
