import Link from 'next/link';
import React from 'react';
import { GImage } from "@/ui/gimage";
import { GCode } from "@/ui/gcode";
import { GTable } from "@/ui/gtable";
import { GChecklist } from "@/ui/gchecklist";
import { GDynamicYear } from "@/ui/g-dynamic-year";
import { GEnterpriseCTA } from "@/ui/g-enterprise-cta";

const CustomLink = (props: any) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href} {...props} className="text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-400/30 hover:border-blue-300">
                {props.children}
            </Link>
        );
    }

    return <a target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-400/30 hover:border-blue-300" {...props} />;
};

const CustomImage = (props: any) => {
    return (
        <figure className="my-12">
            <div className="rounded-xl overflow-hidden relative w-full h-[400px]">
                <GImage
                    src={props.src}
                    alt={props.alt}
                    fill={true}
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    fit="cover"
                />
            </div>
            {props.title && (
                <figcaption className="text-center text-sm text-muted-foreground mt-4 font-sans tracking-wide">{props.title}</figcaption>
            )}
        </figure>
    );
};

// CustomPre replaced by GCode
const CustomPre = GCode;

const CustomH1 = (props: any) => (
    <h1 className="text-foreground leading-tight mb-8 mt-16 first:mt-0" {...props} />
);

const CustomH2 = (props: any) => (
    <h2 className="text-foreground leading-tight mb-6 mt-16 border-b border-white/10 pb-4" {...props} />
);

const CustomH3 = (props: any) => (
    <h3 className="text-foreground leading-tight mb-4 mt-12" {...props} />
);

const CustomP = (props: any) => (
    <div className="font-sans text-muted-foreground leading-relaxed mb-8" {...props} />
);

const CustomUL = (props: any) => (
    <ul className="list-disc list-outside ml-6 mb-8 text-muted-foreground space-y-3 marker:text-blue-500" {...props} />
);

const CustomOL = (props: any) => (
    <ol className="list-decimal list-outside ml-6 mb-8 text-muted-foreground space-y-3 marker:text-blue-500" {...props} />
);

const CustomBlockquote = (props: any) => (
    <blockquote className="border-l-4 border-blue-500/50 pl-8 py-4 my-12 bg-white/5 rounded-r-xl italic h4 text-muted-foreground leading-relaxed" {...props} />
);

// CustomTable replaced by GTable
const CustomTable = GTable;

const CustomTh = (props: any) => (
    <th className="text-left p-4 text-foreground uppercase tracking-wider text-sm border-b border-white/10 bg-white/5" {...props} />
);

const CustomTd = (props: any) => (
    <td className="p-4 border-b border-white/5 text-muted-foreground text-base" {...props} />
);

export const MDXComponents = {
    a: CustomLink,
    img: CustomImage,
    pre: CustomPre,
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    ul: CustomUL,
    ol: CustomOL,
    blockquote: CustomBlockquote,
    table: CustomTable,
    th: CustomTh,
    td: CustomTd,
    GCode,
    GTable,
    GChecklist,
    GEnterpriseCTA,
    DynamicYear: GDynamicYear,
};