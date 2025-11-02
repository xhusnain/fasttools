import type { Metadata } from "next"
import { Code, Globe, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Embed Background Remover Widget - Documentation",
  description: "Learn how to embed our free AI background remover widget on your website",
}

export default function EmbedDocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Embed Background Remover Widget</h1>
        <p className="text-lg text-muted-foreground">
          Add our free AI-powered background removal tool to your website in seconds
        </p>
      </div>

      {/* Navigation */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-4 text-lg">📑 Documentation Index</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <a href="#quick-start" className="hover:text-primary transition-colors">⚡ Quick Start Guide</a>
          <a href="#iframe" className="hover:text-primary transition-colors">🌐 iframe Integration</a>
          <a href="#customization" className="hover:text-primary transition-colors">🎨 Customization Options</a>
          <a href="#wordpress" className="hover:text-primary transition-colors">📘 WordPress Integration</a>
          <a href="#react" className="hover:text-primary transition-colors">⚛️ React Integration</a>
          <a href="#vue" className="hover:text-primary transition-colors">💚 Vue.js Integration</a>
          <a href="#django" className="hover:text-primary transition-colors">🐍 Django/Python Integration</a>
          <a href="#javascript" className="hover:text-primary transition-colors">📜 JavaScript/HTML</a>
          <a href="#demo" className="hover:text-primary transition-colors">🎬 Live Demo</a>
          <a href="#features" className="hover:text-primary transition-colors">✨ Features</a>
          <a href="#use-cases" className="hover:text-primary transition-colors">💼 Use Cases</a>
          <a href="#faq" className="hover:text-primary transition-colors">❓ FAQ</a>
        </div>
      </div>

      {/* Quick Start */}
      <section id="quick-start" className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Quick Start</h2>
        </div>
        <div className="bg-card border rounded-lg p-6">
          <p className="mb-4 text-muted-foreground">
            Copy and paste this code into your HTML where you want the widget to appear:
          </p>
          <div className="relative">
            <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
              <code>{`<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="100%" 
  height="700" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
  title="AI Background Remover"
></iframe>`}</code>
            </pre>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-green-500" />
            No JavaScript required • No API key needed • Free forever
          </div>
        </div>
      </section>

      {/* Method 1: Simple iframe */}
      <section id="iframe" className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold">Method 1: Simple iframe Embed</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Basic Embed</h3>
            <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<!-- Add this to your HTML -->
<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="100%" 
  height="700" 
  frameborder="0"
  allow="camera; microphone"
  title="AI Background Remover"
></iframe>`}</code>
            </pre>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Responsive Embed</h3>
            <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`<!-- Responsive container -->
<div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
  <iframe
    src="https://www.fasttools.store/embed/bg-remover"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="camera; microphone"
    title="AI Background Remover"
  ></iframe>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section id="customization" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Customization Options</h2>
        <div className="bg-card border rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Custom Width & Height</h3>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://www.fasttools.store/embed/bg-remover"
  width="800"      <!-- Custom width -->
  height="600"     <!-- Custom height -->
  frameborder="0"
  title="AI Background Remover"
></iframe>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Add Border/Shadow</h3>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<iframe 
  src="https://www.fasttools.store/embed/bg-remover"
  width="100%"
  height="700"
  frameborder="0"
  style="border: 2px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
  title="AI Background Remover"
></iframe>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Platform-Specific Integration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Platform-Specific Integration</h2>
        
        {/* WordPress */}
        <div id="wordpress" className="bg-card border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              WP
            </div>
            <h3 className="text-xl font-bold">WordPress Integration</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Method 1: Using Gutenberg Block</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mb-3">
                <li>Edit your WordPress page/post</li>
                <li>Click the "+" button to add a new block</li>
                <li>Search for "Custom HTML" or "HTML" block</li>
                <li>Paste the embed code</li>
                <li>Publish your page</li>
              </ol>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<!-- Paste this in Custom HTML block -->
<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="100%" 
  height="700" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
  title="AI Background Remover"
></iframe>`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Method 2: Using Page Builder (Elementor, Divi, etc.)</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Add a "HTML" or "Code" widget to your page</li>
                <li>Paste the iframe embed code</li>
                <li>Save and preview your page</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Method 3: Using Shortcode (Advanced)</h4>
              <p className="text-sm text-muted-foreground mb-2">Add this to your theme's functions.php:</p>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`function bg_remover_shortcode($atts) {
    $atts = shortcode_atts(array(
        'width' => '100%',
        'height' => '700',
    ), $atts);
    
    return '<iframe src="https://www.fasttools.store/embed/bg-remover" 
            width="' . $atts['width'] . '" 
            height="' . $atts['height'] . '" 
            frameborder="0" 
            style="border: none; border-radius: 8px;"
            title="AI Background Remover"></iframe>';
}
add_shortcode('bg_remover', 'bg_remover_shortcode');`}</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">Then use in any post/page: <code>[bg_remover]</code></p>
            </div>
          </div>
        </div>

        {/* React */}
        <div id="react" className="bg-card border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              R
            </div>
            <h3 className="text-xl font-bold">React Integration</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Simple Component</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import React from 'react';

function BgRemoverEmbed() {
  return (
    <iframe 
      src="https://www.fasttools.store/embed/bg-remover" 
      width="100%" 
      height="700" 
      frameBorder="0"
      style={{ border: 'none', borderRadius: '8px' }}
      title="AI Background Remover"
    />
  );
}

export default BgRemoverEmbed;`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">With Custom Props</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import React from 'react';

interface BgRemoverProps {
  width?: string;
  height?: string;
  className?: string;
}

function BgRemover({ 
  width = '100%', 
  height = '700', 
  className 
}: BgRemoverProps) {
  return (
    <div className={className}>
      <iframe 
        src="https://www.fasttools.store/embed/bg-remover" 
        width={width} 
        height={height} 
        frameBorder="0"
        style={{ border: 'none', borderRadius: '8px' }}
        title="AI Background Remover"
      />
    </div>
  );
}

export default BgRemover;

// Usage:
// <BgRemover width="800" height="600" className="my-custom-class" />`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Responsive Wrapper (Next.js Compatible)</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`import React from 'react';

function BgRemoverResponsive() {
  return (
    <div style={{ 
      position: 'relative', 
      paddingBottom: '75%', 
      height: 0, 
      overflow: 'hidden',
      borderRadius: '8px'
    }}>
      <iframe
        src="https://www.fasttools.store/embed/bg-remover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="AI Background Remover"
        allow="camera; microphone"
      />
    </div>
  );
}

export default BgRemoverResponsive;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Vue.js */}
        <div id="vue" className="bg-card border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
              V
            </div>
            <h3 className="text-xl font-bold">Vue.js Integration</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Simple Component</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<template>
  <iframe 
    src="https://www.fasttools.store/embed/bg-remover" 
    :width="width" 
    :height="height" 
    frameborder="0"
    :style="iframeStyle"
    title="AI Background Remover"
  />
</template>

<script setup lang="ts">
interface Props {
  width?: string;
  height?: string;
}

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '700'
});

const iframeStyle = {
  border: 'none',
  borderRadius: '8px'
};
</script>`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">With Composition API</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<template>
  <div :class="containerClass">
    <iframe 
      :src="embedUrl" 
      :width="width" 
      :height="height" 
      frameborder="0"
      :style="iframeStyle"
      title="AI Background Remover"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '700' },
  containerClass: { type: String, default: '' }
});

const embedUrl = 'https://www.fasttools.store/embed/bg-remover';
const iframeStyle = {
  border: 'none',
  borderRadius: '8px'
};
</script>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Django/Python */}
        <div id="django" className="bg-card border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <h3 className="text-xl font-bold">Django & Python Integration</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Django Template</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<!-- my_template.html -->
{% extends 'base.html' %}

{% block content %}
<div class="bg-remover-container">
  <iframe 
    src="https://www.fasttools.store/embed/bg-remover" 
    width="100%" 
    height="700" 
    frameborder="0"
    style="border: none; border-radius: 8px;"
    title="AI Background Remover"
  ></iframe>
</div>
{% endblock %}`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Django Template Tag (Custom)</h4>
              <p className="text-sm text-muted-foreground mb-2">Create a custom template tag:</p>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`# templatetags/bg_remover_tags.py
from django import template

register = template.Library()

@register.inclusion_tag('bg_remover_widget.html')
def bg_remover_widget(width='100%', height='700'):
    return {
        'width': width,
        'height': height
    }

# bg_remover_widget.html
<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="{{ width }}" 
  height="{{ height }}" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
  title="AI Background Remover"
></iframe>

# Usage in template:
{% load bg_remover_tags %}
{% bg_remover_widget width="800" height="600" %}`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Flask Integration</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<!-- template.html -->
<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="100%" 
  height="700" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
  title="AI Background Remover"
></iframe>

# Or use Python string formatting:
iframe_code = '''
<iframe 
  src="https://www.fasttools.store/embed/bg-remover" 
  width="{width}" 
  height="{height}" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
  title="AI Background Remover"
></iframe>
'''.format(width=800, height=600)`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Vanilla JavaScript/HTML */}
        <div id="javascript" className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold">
              JS
            </div>
            <h3 className="text-xl font-bold">Vanilla JavaScript & HTML</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Dynamic Injection</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Inject the widget dynamically
function injectBgRemover(containerId, width = '100%', height = '700') {
  const container = document.getElementById(containerId);
  
  container.innerHTML = \`<iframe 
    src="https://www.fasttools.store/embed/bg-remover" 
    width="\${width}" 
    height="\${height}" 
    frameborder="0"
    style="border: none; border-radius: 8px;"
    title="AI Background Remover"
  ></iframe>\`;
}

// Usage
injectBgRemover('bg-remover-container', '800', '600');`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">With Custom Events</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Background Remover</title>
  <style>
    .widget-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    #bgRemoverWidget {
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="widget-container">
    <h1>AI Background Remover</h1>
    <div id="bgRemoverWidget"></div>
  </div>

  <script>
    // Create iframe dynamically
    const widgetContainer = document.getElementById('bgRemoverWidget');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.fasttools.store/embed/bg-remover';
    iframe.width = '100%';
    iframe.height = '700';
    iframe.frameBorder = '0';
    iframe.style.border = 'none';
    iframe.title = 'AI Background Remover';
    
    // Optional: Listen for messages from iframe
    window.addEventListener('message', (event) => {
      // Handle messages if needed
      console.log('Message from widget:', event.data);
    });
    
    widgetContainer.appendChild(iframe);
  </script>
</body>
</html>`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Responsive Embed Class</h4>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Responsive Background Remover</title>
  <style>
    .responsive-embed {
      position: relative;
      padding-bottom: 75%;
      height: 0;
      overflow: hidden;
      max-width: 100%;
    }
    
    .responsive-embed iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="responsive-embed">
    <iframe 
      src="https://www.fasttools.store/embed/bg-remover"
      title="AI Background Remover"
      allow="camera; microphone"
    ></iframe>
  </div>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="bg-card border rounded-lg p-6">
          <div style={{ position: "relative", paddingBottom: "75%", height: 0, overflow: "hidden", maxWidth: "100%", borderRadius: "8px" }}>
            <iframe
              src="/embed/bg-remover"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              allow="camera; microphone"
              title="AI Background Remover"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Free & No Limits</h3>
            </div>
            <p className="text-sm text-muted-foreground">Use as many times as you want, no credit card required</p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">AI-Powered</h3>
            </div>
            <p className="text-sm text-muted-foreground">Advanced neural network for perfect results</p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Fast Processing</h3>
            </div>
            <p className="text-sm text-muted-foreground">Removes backgrounds in seconds</p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Check className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Privacy First</h3>
            </div>
            <p className="text-sm text-muted-foreground">All processing happens securely on our servers</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
        <div className="bg-card border rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>E-commerce websites</strong> - Let customers see products without backgrounds
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Portfolio sites</strong> - Showcase your photography skills
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Design tools</strong> - Integrate into your design workflow
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Marketing pages</strong> - Offer a free tool to your audience
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Creative agencies</strong> - Quick image editing for clients
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Is this widget really free?</h3>
            <p className="text-sm text-muted-foreground">
              Yes! Our background remover widget is completely free to use with no hidden charges or limits.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Do I need an API key?</h3>
            <p className="text-sm text-muted-foreground">
              No API key required. Just embed the iframe code and it works immediately.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">What file formats are supported?</h3>
            <p className="text-sm text-muted-foreground">
              We support PNG, JPG, JPEG, and WebP formats. Output is always in PNG format with transparency.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">How does it work?</h3>
            <p className="text-sm text-muted-foreground">
              The widget uses advanced AI neural networks (U²-Net) to automatically detect and remove backgrounds from images.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Can I customize the appearance?</h3>
            <p className="text-sm text-muted-foreground">
              Yes! You can adjust the width, height, add borders, shadows, and more using standard CSS styling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6 opacity-90">
          Start using our background remover widget on your website today
        </p>
        <Link 
          href="/image-tools/image-background-remover"
          className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Try Live Widget
        </Link>
      </section>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Made with ❤️ by <Link href="/" className="text-primary hover:underline">FastTools</Link></p>
      </div>
    </div>
  )
}

