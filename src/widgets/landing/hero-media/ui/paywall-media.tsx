import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { paywallSources } from "../config/media-sources";
import { cn } from "@shared/lib/utils.ts";


function HeroPaywallMedia() {
    return (
        <div className={cn(
            "absolute top-0 left-0 bottom-0 flex items-center max-w-[30vw]",
            "md:max-w-[180px]"
        )}>
            <ResponsivePicture
                sources={paywallSources}
                src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
                alt="Adapty Paywall Demo Preview"
                width={360}
                height={748}
                className="css-filter size-full"
                pictureClassName="img-no-drag tag"
                pictureId="creative-image"
                loading="eager"
                fetchPriority="high"
            />
        </div>
    );
}

export { HeroPaywallMedia };