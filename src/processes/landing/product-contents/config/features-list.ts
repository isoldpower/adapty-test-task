import type { ProductFeatureBlockProps } from "@widgets/landing/product-contents";

const productFeatures: ProductFeatureBlockProps[] = [
    {
        image: {
            src: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp',
            sources: [
                { srcSet: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp' }
            ],
            alt: 'For developers feature showcase image',
        },
        title: "For Developers",
        hrefType: 'for-developers',
        labels: ['Subscriptions SDK', "Refund Saver", "Remote config", "Fallback paywalls"],
    },
    {
        image: {
            src: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp',
            sources: [
                { srcSet: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp' }
            ],
            alt: 'For app owners feature showcase image',
        },
        title: "For app owners",
        hrefType: 'for-owners',
        labels: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
    },
    {
        image: {
            src: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp',
            sources: [
                { srcSet: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp' }
            ],
            alt: 'For marketers feature showcase image',
        },
        title: "For marketers",
        hrefType: 'for-marketers',
        labels: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
    },
];

export { productFeatures };