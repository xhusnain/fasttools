import { Metadata } from "next";
import Link from "next/link";
import { toolPages, mainPages } from "@/lib/sitemap-config";
import { Search, Sparkles, Grid, ArrowRight, Tag, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "All Tools Directory - FastTools",
  description: "Explore our complete collection of free online tools. From Calculators to Converters, find exactly what you need in seconds.",
  alternates: {
    canonical: "/all-tools",
  },
};

export default function AllToolsPage() {
  // Group tools by category
  const groupedTools: Record<string, typeof toolPages> = {};

  toolPages.forEach((tool) => {
    const path = tool.url.replace("https://www.fasttools.store", "");
    const category = path.split("/")[1] || "general";
    
    if (!groupedTools[category]) {
      groupedTools[category] = [];
    }
    groupedTools[category].push(tool);
  });

  // Format category names
  const formatCategory = (slug: string) => {
    return slug
      .replace(/-/g, " ")
      .replace("tools", "")
      .replace(/^\w/, (c) => c.toUpperCase())
      .trim() + " Tools";
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>{toolPages.length}+ Free Tools Available</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tools Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse our complete collection of utilities, calculators, and converters.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mt-8">
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
               <input 
                 type="text" 
                 placeholder="Find a tool..." 
                 className="w-full bg-muted/50 border border-border rounded-lg text-foreground pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all placeholder:text-muted-foreground/70"
                 disabled 
               />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="space-y-16">
          {Object.entries(groupedTools).sort().map(([category, tools]) => {
             const displayName = formatCategory(category);

             return (
              <section key={category} className="scroll-mt-24" id={category}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-border/40">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Grid className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground capitalize tracking-tight">
                    {displayName}
                  </h2>
                  <span className="ml-auto text-sm font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                    {tools.length} tools
                  </span>
                </div>

                {/* Tools Grid - Pure Links, No Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {tools.map((tool) => {
                    const path = tool.url.replace("https://www.fasttools.store", "");
                    const name = path.split("/").pop()
                        ?.replace(/-/g, " ")
                        .replace(/^\w/, (c) => c.toUpperCase()) || "Tool";
                    
                    return (
                      <Link 
                        key={path} 
                        href={path} 
                        className="group flex items-center justify-between text-base text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        <span className="truncate pr-4 border-b border-transparent group-hover:border-primary/30">
                          {name}
                        </span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Other Pages Section */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="flex items-center gap-3 mb-8">
             <Tag className="w-5 h-5 text-muted-foreground" />
             <h2 className="text-xl font-semibold text-foreground">Site Pages & Resources</h2>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3">
              {mainPages.map((page) => {
                  const path = page.url.replace("https://www.fasttools.store", "");
                  if (path === "") return null;
                  const label = path.replace("/", "").replace(/-/g, " ").toUpperCase();
                  
                  return (
                      <Link 
                          key={path} 
                          href={path}
                          className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                          {label}
                          <ExternalLink className="w-3 h-3 opacity-50" />
                      </Link>
                  )
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
