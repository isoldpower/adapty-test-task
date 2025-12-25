import { ThinSectionTitle } from "@entities/landing/typography";
import { DirectionalLines } from "@entities/landing/directional-lines";
import { adaptyMetrics } from "../config/metrics.ts";
import {Card} from "@shared/ui-toolkit";

function AchievementsSection() {
    return (
        <div className="w-full flex flex-col gap-12 sm:gap-16 relative">
            {/* Directional lines at edges */}
            <div className="absolute inset-0 pointer-events-none">
                <DirectionalLines variant="subtle" />
            </div>
            
            {/* Title - Faded white text */}
            <div className="w-full flex flex-col items-center text-center relative z-10">
                <ThinSectionTitle className="max-w-6xl font-light">
                    Adapty processes subscription revenue with the industry's highest SLA Rate
                </ThinSectionTitle>
            </div>

            {/* Metrics Display - Clean card layout */}
            <div className="w-full mt-8 sm:mt-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {adaptyMetrics.map((metric, index) => (
                        <Card
                            key={index}
                            className="relative shadow-none bg-transparent p-0!"
                        >
                            <div className="flex flex-col gap-4 mt-2 p-4">
                                {/* Metric value - darker gray box with white text */}
                                <div className="rounded-lg flex items-start justify-start min-h-[80px]">
                                    <div className="font-bold text-3xl sm:text-4xl md:text-8xl text-foreground">
                                        {metric.value}
                                    </div>
                                </div>
                                
                                {/* Label - faded gray text */}
                                <div className="text-xs sm:text-lg font-medium text-gray-400 uppercase tracking-wider">
                                    {metric.label}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { AchievementsSection };