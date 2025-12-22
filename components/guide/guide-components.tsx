'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Copy, Check, ExternalLink } from 'lucide-react';

// Try It Button - links to live tool
interface TryItButtonProps {
    href: string;
    label?: string;
}

export function TryItButton({ href, label = "Try it Yourself »" }: TryItButtonProps) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm shadow-md hover:shadow-lg"
        >
            <Play className="h-4 w-4" />
            {label}
        </Link>
    );
}

// Code Example Box with copy button
interface CodeExampleProps {
    title?: string;
    code: string;
    language?: string;
    tryLink?: string;
}

export function CodeExample({ title = "Example", code, language = "jsx", tryLink }: CodeExampleProps) {
    const [copied, setCopied] = React.useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-border bg-card">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
                <span className="text-sm font-semibold text-foreground">{title}</span>
                <button
                    onClick={copyCode}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            {/* Code */}
            <pre className="p-4 overflow-x-auto bg-[#1e1e1e] text-sm">
                <code className="text-gray-300 font-mono">{code}</code>
            </pre>

            {/* Try It Button */}
            {tryLink && (
                <div className="px-4 py-3 bg-muted border-t border-border">
                    <TryItButton href={tryLink} />
                </div>
            )}
        </div>
    );
}

// Info Box (like W3Schools green/yellow boxes)
interface InfoBoxProps {
    type?: 'note' | 'tip' | 'warning';
    title?: string;
    children: React.ReactNode;
}

export function InfoBox({ type = 'note', title, children }: InfoBoxProps) {
    const styles = {
        note: {
            bg: 'bg-blue-50 dark:bg-blue-950/30',
            border: 'border-l-4 border-blue-500',
            icon: '📝',
            defaultTitle: 'Note',
        },
        tip: {
            bg: 'bg-green-50 dark:bg-green-950/30',
            border: 'border-l-4 border-green-500',
            icon: '💡',
            defaultTitle: 'Tip',
        },
        warning: {
            bg: 'bg-yellow-50 dark:bg-yellow-950/30',
            border: 'border-l-4 border-yellow-500',
            icon: '⚠️',
            defaultTitle: 'Warning',
        },
    };

    const style = styles[type];

    return (
        <div className={`my-6 p-4 rounded-r-lg ${style.bg} ${style.border}`}>
            <div className="flex items-start gap-3">
                <span className="text-lg">{style.icon}</span>
                <div>
                    <div className="font-semibold text-foreground text-sm mb-1">
                        {title || style.defaultTitle}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Step Navigation (Previous / Next)
interface StepNavProps {
    prevStep?: { title: string; href: string };
    nextStep?: { title: string; href: string };
}

export function StepNav({ prevStep, nextStep }: StepNavProps) {
    return (
        <div className="flex items-center justify-between py-6 my-8 border-t border-b border-border">
            {prevStep ? (
                <Link
                    href={prevStep.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <div>
                        <div className="text-xs text-muted-foreground">Previous</div>
                        <div className="font-medium text-foreground">{prevStep.title}</div>
                    </div>
                </Link>
            ) : <div />}

            {nextStep ? (
                <Link
                    href={nextStep.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                >
                    <div>
                        <div className="text-xs text-muted-foreground">Next</div>
                        <div className="font-medium text-foreground">{nextStep.title}</div>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                </Link>
            ) : <div />}
        </div>
    );
}

// Exercise Box
interface ExerciseBoxProps {
    title?: string;
    question: string;
    hint?: string;
}

export function ExerciseBox({ title = "Exercise", question, hint }: ExerciseBoxProps) {
    const [showHint, setShowHint] = React.useState(false);

    return (
        <div className="my-6 p-5 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🎯</span>
                <span className="font-bold text-foreground">{title}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{question}</p>
            {hint && (
                <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-xs text-primary hover:text-primary/80 font-medium"
                >
                    {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
            )}
            {showHint && hint && (
                <div className="mt-3 p-3 bg-primary/10 rounded text-xs text-muted-foreground">
                    💡 {hint}
                </div>
            )}
        </div>
    );
}

// Definition/Syntax Box
interface SyntaxBoxProps {
    title?: string;
    children: React.ReactNode;
}

export function SyntaxBox({ title = "Syntax", children }: SyntaxBoxProps) {
    return (
        <div className="my-6 rounded-lg overflow-hidden border border-border">
            <div className="px-4 py-2 bg-muted border-b border-border">
                <span className="text-sm font-semibold text-foreground">{title}</span>
            </div>
            <div className="p-4 bg-card font-mono text-sm text-foreground">
                {children}
            </div>
        </div>
    );
}

// Chapter/Lesson Link
interface ChapterLinkProps {
    number: number;
    title: string;
    href: string;
    isActive?: boolean;
    isCompleted?: boolean;
}

export function ChapterLink({ number, title, href, isActive, isCompleted }: ChapterLinkProps) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
        >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                        ? 'bg-primary-foreground text-primary'
                        : 'bg-muted text-muted-foreground'
                }`}>
                {isCompleted ? '✓' : number}
            </span>
            <span className="truncate">{title}</span>
        </Link>
    );
}

// What You'll Learn Box
interface LearningGoalsProps {
    goals: string[];
}

export function LearningGoals({ goals }: LearningGoalsProps) {
    return (
        <div className="my-6 p-5 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🎯</span>
                <span className="font-bold text-foreground">What You Will Learn</span>
            </div>
            <ul className="space-y-2">
                {goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{goal}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Progress Tracker
interface ProgressTrackerProps {
    current: number;
    total: number;
}

export function ProgressTracker({ current, total }: ProgressTrackerProps) {
    const percentage = Math.round((current / total) * 100);

    return (
        <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
            <div className="flex-1">
                <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                {current}/{total} ({percentage}%)
            </span>
        </div>
    );
}
