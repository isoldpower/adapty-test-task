import { cn } from "@shared/lib/utils.ts";

interface GridBackgroundProps {
    className?: string;
    variant?: 'default' | 'subtle' | 'dense';
    opacity?: number;
}

function GridBackground({ 
    className, 
    variant = 'default',
    opacity = 0.03
}: GridBackgroundProps) {
    const gridSize = variant === 'dense' ? 20 : variant === 'subtle' ? 40 : 32;
    
    return (
        <div 
            className={cn(
                "absolute inset-0 pointer-events-none overflow-hidden",
                className
            )}
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgb(0 0 0 / ${opacity}) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(0 0 0 / ${opacity}) 1px, transparent 1px)
                `,
                backgroundSize: `${gridSize}px ${gridSize}px`,
            }}
        />
    );
}

export { GridBackground };
export type { GridBackgroundProps };

