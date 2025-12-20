import { ResponsivePicture } from "@entities/landing/responsive-picture";
import {cn} from "@shared/lib/utils.ts";

function HeroOverviewMedia() {
    const overviewSources = [
        {
            media: '(max-width: 432px)',
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-overview@1x.webp'
        },
        {
            media: '(max-width: 575px)',
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-overview@1.5x.webp'
        },
        {
            media: '(max-width: 767px)',
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-overview@1.5x.webp'
        },
        {
            media: '(max-width: 991px)',
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-overview@1.5x.webp'
        },
        {
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp'
        },
    ];

    return (
        <div className={cn(
            "relative origin-left scale-100 translate-x-[21vw]",
            "xs:scale-100 xs:translate-x-[23vw]",
            "sm:scale-100 sm:translate-x-[26vw]",
            "md:scale-[1.35] md:translate-x-[106px]",
            "lg:scale-125 lg:translate-x-[100px]",
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