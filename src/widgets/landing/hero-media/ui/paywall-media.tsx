import { ResponsivePicture } from "@entities/landing/responsive-picture";

function HeroPaywallMedia() {
    const paywallSources = [
        {
            media: '(max-width: 358px)',
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@1x.webp'
        },
        {
            media: '(max-width: 432px)',
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@1.5x.webp'
        },
        {
            srcSet: 'https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp'
        },
    ];

    return (
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
    );
}

export { HeroPaywallMedia };