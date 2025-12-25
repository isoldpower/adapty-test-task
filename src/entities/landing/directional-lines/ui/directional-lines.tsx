import { cn } from "@shared/lib/utils.ts";

interface DirectionalLinesProps {
    className?: string;
    variant?: 'default' | 'subtle';
}

function DirectionalLines({ 
    className,
    variant = 'default'
}: DirectionalLinesProps) {
    const opacity = variant === 'subtle' ? 0.15 : 0.3;
    const strokeColor = variant === 'subtle' ? `rgb(255 255 255 / ${opacity})` : `rgb(0 0 0 / ${opacity})`;
    const lineLength = 30;
    const spacing = 60;
    
    return (
        <div 
            className={cn(
                "absolute inset-0 pointer-events-none overflow-hidden",
                className
            )}
        >
            {/* Top edge - diagonal lines pointing outward */}
            <svg 
                className="absolute top-0 left-0 w-full"
                height="40"
                style={{ opacity }}
            >
                <defs>
                    <pattern id="top-lines" x="0" y="0" width={spacing} height="40" patternUnits="userSpaceOnUse">
                        <line 
                            x1={spacing / 2} 
                            y1="0" 
                            x2={spacing / 2 - lineLength / 2} 
                            y2={lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                        <line 
                            x1={spacing / 2} 
                            y1="0" 
                            x2={spacing / 2 + lineLength / 2} 
                            y2={lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#top-lines)" />
            </svg>

            {/* Bottom edge - diagonal lines pointing outward */}
            <svg 
                className="absolute bottom-0 left-0 w-full"
                height="40"
                style={{ opacity }}
            >
                <defs>
                    <pattern id="bottom-lines" x="0" y="0" width={spacing} height="40" patternUnits="userSpaceOnUse">
                        <line 
                            x1={spacing / 2} 
                            y1="40" 
                            x2={spacing / 2 - lineLength / 2} 
                            y2={40 - lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                        <line 
                            x1={spacing / 2} 
                            y1="40" 
                            x2={spacing / 2 + lineLength / 2} 
                            y2={40 - lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#bottom-lines)" />
            </svg>

            {/* Left edge - diagonal lines pointing outward */}
            <svg 
                className="absolute top-0 left-0 h-full"
                width="40"
                style={{ opacity }}
            >
                <defs>
                    <pattern id="left-lines" x="0" y="0" width="40" height={spacing} patternUnits="userSpaceOnUse">
                        <line 
                            x1="0" 
                            y1={spacing / 2} 
                            x2={lineLength / 2} 
                            y2={spacing / 2 - lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                        <line 
                            x1="0" 
                            y1={spacing / 2} 
                            x2={lineLength / 2} 
                            y2={spacing / 2 + lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#left-lines)" />
            </svg>

            {/* Right edge - diagonal lines pointing outward */}
            <svg 
                className="absolute top-0 right-0 h-full"
                width="40"
                style={{ opacity }}
            >
                <defs>
                    <pattern id="right-lines" x="0" y="0" width="40" height={spacing} patternUnits="userSpaceOnUse">
                        <line 
                            x1="40" 
                            y1={spacing / 2} 
                            x2={40 - lineLength / 2} 
                            y2={spacing / 2 - lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                        <line 
                            x1="40" 
                            y1={spacing / 2} 
                            x2={40 - lineLength / 2} 
                            y2={spacing / 2 + lineLength / 2} 
                            stroke={strokeColor} 
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#right-lines)" />
            </svg>
        </div>
    );
}

export { DirectionalLines };
export type { DirectionalLinesProps };

