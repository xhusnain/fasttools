import Link from 'next/link';
import React from 'react';
import { GImage } from "@/ui/gimage";
import { GCode } from "@/ui/gcode";
import { GTable } from "@/ui/gtable";
import { GChecklist } from "@/ui/gchecklist";
import { GDynamicYear } from "@/ui/g-dynamic-year";
import {
    TryItButton,
    CodeExample,
    InfoBox,
    StepNav,
    ExerciseBox,
    SyntaxBox,
    LearningGoals,
    ProgressTracker,
    ChapterLink
} from "./guide-components";

// W3Schools-style link
const CustomLink = (props: any) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href} {...props} className="text-primary hover:underline font-medium">
                {props.children}
            </Link>
        );
    }

    return <a target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium" {...props} />;
};

const CustomImage = (props: any) => {
    return (
        <figure className="my-6">
            <div className="rounded-lg overflow-hidden relative w-full h-[300px] border border-border">
                <GImage
                    src={props.src}
                    alt={props.alt}
                    fill={true}
                    className="object-cover"
                    fit="cover"
                />
            </div>
            {props.title && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3">{props.title}</figcaption>
            )}
        </figure>
    );
};

const CustomPre = GCode;

// Clean, W3Schools-style headings
const CustomH1 = (props: any) => (
    <h1 className="text-3xl font-bold text-foreground mb-6 mt-0 leading-tight" {...props} />
);

const CustomH2 = (props: any) => (
    <h2 className="text-2xl font-bold text-foreground mb-4 mt-10 pb-2 border-b border-border" {...props} />
);

const CustomH3 = (props: any) => (
    <h3 className="text-xl font-bold text-foreground mb-3 mt-8" {...props} />
);

// Clean paragraph style
const CustomP = (props: any) => (
    <p className="text-base text-muted-foreground leading-relaxed mb-4" {...props} />
);

const CustomUL = (props: any) => (
    <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-1.5 ml-2" {...props} />
);

const CustomOL = (props: any) => (
    <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-1.5 ml-2" {...props} />
);

const CustomLI = (props: any) => (
    <li className="text-muted-foreground" {...props} />
);

// Blockquote as highlighted info
const CustomBlockquote = (props: any) => (
    <blockquote className="my-4 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg text-muted-foreground text-sm" {...props} />
);

const CustomTable = GTable;

const CustomTh = (props: any) => (
    <th className="text-left p-3 text-foreground text-sm font-semibold border-b-2 border-border bg-muted/50" {...props} />
);

const CustomTd = (props: any) => (
    <td className="p-3 border-b border-border text-muted-foreground text-sm" {...props} />
);

// Simple HR
const CustomHR = () => (
    <hr className="my-8 border-border" />
);

// Inline code styling
const CustomCode = (props: any) => (
    <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-red-600 dark:text-red-400" {...props} />
);

// Strong text
const CustomStrong = (props: any) => (
    <strong className="font-semibold text-foreground" {...props} />
);

export const GuideMDXComponents = {
    a: CustomLink,
    img: CustomImage,
    pre: CustomPre,
    code: CustomCode,
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    ul: CustomUL,
    ol: CustomOL,
    li: CustomLI,
    blockquote: CustomBlockquote,
    table: CustomTable,
    th: CustomTh,
    td: CustomTd,
    hr: CustomHR,
    strong: CustomStrong,
    GCode,
    GTable,
    GChecklist,
    DynamicYear: GDynamicYear,
    // W3Schools-style components
    TryItButton,
    CodeExample,
    InfoBox,
    StepNav,
    ExerciseBox,
    SyntaxBox,
    LearningGoals,
    ProgressTracker,
    ChapterLink,
};
