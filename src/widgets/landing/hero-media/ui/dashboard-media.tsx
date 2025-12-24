import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { cn } from "@shared/lib/utils.ts";
import { overviewSources } from "../config/media-sources";


function HeroOverviewMedia() {
    return (
        <div className={cn(
            "relative origin-left translate-x-[21vw]",
            "sm:translate-x-[23vw]",
            "min-[576px]:translate-x-[26vw]",
            "md:scale-[1.35] md:translate-x-[106px]",
            "lg:scale-[1.25] lg:translate-x-[100px]",
            "xl:scale-[1.4] xl:translate-x-[85px]",
        )}>
            <ResponsivePicture
                sources={overviewSources}
                src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
                alt="Adapty Overview"
                width={1268}
                height={1060}
                className="css-filter size-full"
                pictureClassName="img-no-drag fetch-priority tag"
                pictureId="creative-overview"
                loading="eager"
                fetchPriority="high"
            />
        </div>
    );
}

export { HeroOverviewMedia };