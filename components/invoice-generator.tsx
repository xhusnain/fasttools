"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Download, Plus, Trash2 } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
}

export function InvoiceGenerator() {
  const [loading, setLoading] = useState(false)
  const [businessName, setBusinessName] = useState("")
  const [businessEmail, setBusinessEmail] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [items, setItems] = useState<InvoiceItem[]>([{ id: "1", description: "", quantity: 1, rate: 0 }])

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), description: "", quantity: 1, rate: 0 }])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.rate, 0)
  }

  const calculateTax = (subtotal: number) => {
    return subtotal * 0.1 // 10% tax
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const tax = calculateTax(subtotal)
    return subtotal + tax
  }

  const generateInvoice = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }

  const copyInvoice = () => {
    const invoiceText = `
Invoice #${invoiceNumber}
From: ${businessName} (${businessEmail})
To: ${clientName} (${clientEmail})
Date: ${invoiceDate}
Due Date: ${dueDate}

Items:
${items.map((item) => `${item.description} - Qty: ${item.quantity} x $${item.rate} = $${(item.quantity * item.rate).toFixed(2)}`).join("\n")}

Subtotal: $${calculateSubtotal().toFixed(2)}
Tax (10%): $${calculateTax(calculateSubtotal()).toFixed(2)}
Total: $${calculateTotal().toFixed(2)}
    `.trim()

    navigator.clipboard.writeText(invoiceText)
  }

  const subtotal = calculateSubtotal()
  const tax = calculateTax(subtotal)
  const total = calculateTotal()

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Invoice Details</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter your business and client information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-sm font-medium text-foreground">
                Your Business Name
              </Label>
              <Input
                id="businessName"
                type="text"
                placeholder="Acme Inc."
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="h-10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessEmail" className="text-sm font-medium text-foreground">
                Your Email
              </Label>
              <Input
                id="businessEmail"
                type="email"
                placeholder="hello@acme.com"
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                className="h-10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientName" className="text-sm font-medium text-foreground">
                Client Name
              </Label>
              <Input
                id="clientName"
                type="text"
                placeholder="John Doe"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="h-10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientEmail" className="text-sm font-medium text-foreground">
                Client Email
              </Label>
              <Input
                id="clientEmail"
                type="email"
                placeholder="john@example.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="h-10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoiceNumber" className="text-sm font-medium text-foreground">
                Invoice Number
              </Label>
              <Input
                id="invoiceNumber"
                type="text"
                placeholder="INV-001"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="h-10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoiceDate" className="text-sm font-medium text-foreground">
                Invoice Date
              </Label>
              <Input
                id="invoiceDate"
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="h-10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate" className="text-sm font-medium text-foreground">
                Due Date
              </Label>
              <Input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="h-10 text-sm"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-foreground">Invoice Items</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Add items or services to your invoice
              </CardDescription>
            </div>
            <Button onClick={addItem} size="sm" className="h-9 text-sm font-medium">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5 space-y-2">
                <Label htmlFor={`description-${item.id}`} className="text-sm font-medium text-foreground">
                  Description
                </Label>
                <Input
                  id={`description-${item.id}`}
                  type="text"
                  placeholder="Service or product description"
                  value={item.description}
                  onChange={(e) => updateItem(item.id, "description", e.target.value)}
                  className="h-10 text-sm"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-foreground">
                  Quantity
                </Label>
                <Input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, "quantity", Number.parseInt(e.target.value) || 1)}
                  className="h-10 text-sm"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor={`rate-${item.id}`} className="text-sm font-medium text-foreground">
                  Rate ($)
                </Label>
                <Input
                  id={`rate-${item.id}`}
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.rate}
                  onChange={(e) => updateItem(item.id, "rate", Number.parseFloat(e.target.value) || 0)}
                  className="h-10 text-sm"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label className="text-sm font-medium text-foreground">Amount</Label>
                <div className="h-10 flex items-center text-sm font-medium text-foreground">
                  ${(item.quantity * item.rate).toFixed(2)}
                </div>
              </div>

              <div className="md:col-span-1">
                <Button
                  onClick={() => removeItem(item.id)}
                  variant="ghost"
                  size="sm"
                  className="h-10 w-full md:w-10 text-destructive hover:text-destructive hover:bg-destructive/10"
                  disabled={items.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax (10%):</span>
              <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold border-t border-border pt-2">
              <span className="text-foreground">Total:</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={generateInvoice}
          disabled={loading || !businessName || !clientName || !invoiceNumber}
          className="flex-1 h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
        >
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Generate Invoice
            </>
          )}
        </Button>
        <Button
          onClick={copyInvoice}
          variant="outline"
          disabled={!businessName || !clientName || !invoiceNumber}
          className="h-11 text-sm font-medium hover:bg-accent transition-all bg-transparent"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Details
        </Button>
      </div>
    </div>
  )
}
