import { useEffect, useRef, useState } from "react";

import { cn } from "@shared/lib/utilities";


interface InteractiveGridBackgroundProps {
    className?: string;
    variant?: "default" | "subtle" | "dense";
    baseOpacity?: number;
    activeOpacity?: number;
    radius?: number;
}

function InteractiveGridBackground({ 
    className, 
    variant = "default",
    baseOpacity = 0.02,
    activeOpacity = 0.08,
    radius = 300
}: InteractiveGridBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const gridSize = variant === "dense" ? 20 : variant === "subtle" ? 40 : 32;

    useEffect(() => {
        const baseGridRef = containerRef.current;
        if (!baseGridRef) return;

        const parentSection = baseGridRef.closest("section");
        if (!parentSection) return;

        let rafId: number | null = null;
        let lastX = 0;
        let lastY = 0;

        const updateMousePosition = () => {
            setMousePosition({ x: lastX, y: lastY });
            rafId = null;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = parentSection.getBoundingClientRect();
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
            
            rafId ??= requestAnimationFrame(updateMousePosition);
            setIsHovering(true);
        };

        const handleMouseEnter = () => { setIsHovering(true); };
        const handleMouseLeave = () => {
            setIsHovering(false);
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        };

        parentSection.addEventListener("mousemove", handleMouseMove, { passive: true });
        parentSection.addEventListener("mouseenter", handleMouseEnter);
        parentSection.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            parentSection.removeEventListener("mousemove", handleMouseMove);
            parentSection.removeEventListener("mouseenter", handleMouseEnter);
            parentSection.removeEventListener("mouseleave", handleMouseLeave);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <>
            {/* Base grid - always visible with gradient fade on edges */}
            <div 
                ref={containerRef}
                className={cn(
                    "absolute inset-0 pointer-events-none overflow-hidden",
                    className
                )}
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgb(0 0 0 / ${baseOpacity.toString()}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(0 0 0 / ${baseOpacity.toString()}) 1px, transparent 1px)
                    `,
                    backgroundSize: `${gridSize.toString()}px ${gridSize.toString()}px`,
                    maskImage: "radial-gradient(ellipse 80% 60% at center, black 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at center, black 30%, transparent 100%)",
                }}
            />
            
            {/* Colored grid overlay that follows mouse - brighter grid around cursor */}
            {isHovering && (
                <div 
                    className="absolute pointer-events-none"
                    style={{
                        left: `${(mousePosition.x - radius).toString()}px`,
                        top: `${(mousePosition.y - radius).toString()}px`,
                        width: `${(radius * 2).toString()}px`,
                        height: `${(radius * 2).toString()}px`,
                        backgroundImage: `
                            linear-gradient(to right, rgb(149 46 226 / ${activeOpacity.toString()}) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(149 46 226 / ${activeOpacity.toString()}) 1px, transparent 1px)
                        `,
                        backgroundSize: `${gridSize.toString()}px ${gridSize.toString()}px`,
                        backgroundPosition: `${(-(mousePosition.x % gridSize)).toString()}px ${(-(mousePosition.y % gridSize)).toString()}px`,
                        maskImage: `radial-gradient(circle ${radius.toString()}px at ${radius.toString()}px ${radius.toString()}px, black 70%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(circle ${radius.toString()}px at ${radius.toString()}px ${radius.toString()}px, black 70%, transparent 100%)`,
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }}
                />
            )}
        </>
    );
}

export { InteractiveGridBackground };
export type { InteractiveGridBackgroundProps };

