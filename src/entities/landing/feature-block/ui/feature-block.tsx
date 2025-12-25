import { cn } from "@shared/lib/utils.ts";
import type { ReactNode } from "react";

interface FeatureBlockProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'bordered' | 'gradient';
}

function FeatureBlock({ 
    children, 
    className,
    variant = 'default'
}: FeatureBlockProps) {
    const variants = {
        default: "bg-white border border rounded-2xl p-6 sm:p-8 transition-shadow",
        elevated: "bg-white rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1",
        bordered: "bg-white border-2 border rounded-2xl p-6 sm:p-8 transition-colors",
        gradient: "bg-gradient-to-br from-white to-gray-50 border border rounded-2xl p-6 sm:p-8 transition-all",
    };

    return (
        <div className={cn(variants[variant], className)}>
            {children}
        </div>
    );
}

export { FeatureBlock };
export type { FeatureBlockProps };

