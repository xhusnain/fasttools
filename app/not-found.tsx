import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Home, Search, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you're looking for doesn't exist. Browse our free online tools including calculators, converters, and more.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {}
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Calculator className="h-12 w-12 text-primary" />
            </div>
          </div>

          {}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {}
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Popular Tools
              </CardTitle>
              <CardDescription>
                Try these popular free online tools instead
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link
                  href="/calculator/age-calculator"
                  className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <div className="font-medium text-sm">Age Calculator</div>
                  <div className="text-xs text-muted-foreground">Calculate your exact age</div>
                </Link>
                <Link
                  href="/calculator/bmi-calculator"
                  className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <div className="font-medium text-sm">BMI Calculator</div>
                  <div className="text-xs text-muted-foreground">Calculate your body mass index</div>
                </Link>
                <Link
                  href="/calculator/loan-calculator"
                  className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <div className="font-medium text-sm">Loan Calculator</div>
                  <div className="text-xs text-muted-foreground">Calculate loan payments</div>
                </Link>
                <Link
                  href="/converters/currency"
                  className="block p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <div className="font-medium text-sm">Currency Converter</div>
                  <div className="text-xs text-muted-foreground">Convert between currencies</div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/calculator">
                <Search className="mr-2 h-4 w-4" />
                Browse All Tools
              </Link>
            </Button>
          </div>

          {}
          <div className="text-sm text-muted-foreground">
            <p>
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-link hover:text-link-hover hover:underline font-medium">
                contact us
              </Link>{" "}
              and we'll help you find what you're looking for.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

