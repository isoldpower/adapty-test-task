import type { ImageSource } from "@entities/landing/responsive-picture";

interface BenefitItem {
    media: {
        width: number;
        height: number;
        sources: ImageSource[];
        alt: string;
        src: string;
        background: string;
    }
    title: string;
    description: string;
    cta: string;
    href: string;
    testimonial: {
        appName?: string;
        appDesc?: string;
        quote: string;
        companyImg: string;
        author: string;
        role: string;
        avatar: string;
    } | null
}

const benefitsList: BenefitItem[] = [
    {
        media: {
            width: 1280,
            height: 960,
            sources: [
                { srcSet: "https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@1.5x.webp", media: "(max-width: 358px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp", media: "(max-width: 767px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@1.5x.webp", media: "(max-width: 991px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp" },
            ],
            alt: "Paywall A/B testing",
            src: "https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp",
            background: 'rgb(39, 97, 80)'
        },
        title: "Increase subscription revenue without app releases",
        description: "Manage, target, localize and personalize paywalls without leaving your browser.",
        cta: "Increase app revenue",
        href: "https://adapty.io/paywall-ab-testing/",
        testimonial: {
            quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
            companyImg: "https://adapty.io/assets/uploads/2024/03/logo-smartist-black@2x.png",
            author: "Ilgar Tali",
            role: "Founder & Chief Vision Officer",
            avatar: "https://adapty.io/assets/uploads/2024/02/Ilgar-Tali-Smartist@2x.webp",
        },
    },
    {
        media: {
            width: 768,
            height: 576,
            sources: [
                { srcSet: "https://adapty.io/assets/uploads/2025/05/refund-rate@1.5x.webp", media: "(max-width: 358px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/05/refund-rate@2x-1024x768.webp", media: "(max-width: 767px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/05/refund-rate@1.5x.webp", media: "(max-width: 991px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/05/refund-rate@2x-1024x768.webp" },
            ],
            alt: "Refund Rate",
            src: "https://adapty.io/assets/uploads/2025/05/refund-rate@2x-768x576.webp",
            background: 'rgb(207, 235, 227)'
        },
        title: "Cut refund rate by 40%",
        description: "Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.",
        cta: "Set up Refund Saver",
        href: "https://adapty.io/refund-saver/",
        testimonial: {
            quote: "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away.",
            companyImg: "https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp",
            appName: "Fotorama",
            appDesc: "Photo and video",
            author: "Berk Çağatay Albayrak",
            role: "Sr. Product Manager",
            avatar: "https://adapty.io/assets/uploads/2024/12/avatar-berk-cagatay-gray@3x.webp",
        },
    },
    {
        media: {
            width: 1280,
            height: 960,
            sources: [
                { srcSet: "https://adapty.io/assets/uploads/2024/01/app-monetization-strategies.webp", media: "(max-width: 358px)" },
                { srcSet: "https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp", media: "(max-width: 767px)" },
                { srcSet: "https://adapty.io/assets/uploads/2024/01/app-monetization-strategies.webp", media: "(max-width: 991px)" },
                { srcSet: "https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp" },
            ],
            alt: "App Monetization Strategies",
            src: "https://adapty.io/assets/uploads/2024/01/app-monetization-strategies@2x.webp",
            background: 'rgb(192, 175, 253)'
        },
        title: "Know your subscription numbers at any moment",
        description: "Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.",
        cta: "See subscription BI",
        href: "https://adapty.io/ltv-analytics/",
        testimonial: {
            quote: "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
            companyImg: "https://adapty.io/assets/uploads/2023/12/app_icon_Moonly.svg",
            appName: "Moonly",
            appDesc: "Moon calendar app",
            author: "Nikolay Chebotarev",
            role: "Head of UA at Moonly.app",
            avatar: "https://adapty.io/assets/uploads/2024/02/Nikolay.png",
        },
    },
    {
        media: {
            width: 1280,
            height: 960,
            sources: [
                { srcSet: "https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder.webp", media: "(max-width: 358px)" },
                { srcSet: "https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x-1024x768.webp", media: "(max-width: 767px)" },
                { srcSet: "https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder.webp", media: "(max-width: 991px)" },
                { srcSet: "https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp" },
            ],
            alt: "No Code Paywall Builder",
            src: "https://adapty.io/assets/uploads/2024/01/no-code-paywall-builder@2x.webp",
            background: 'rgb(255, 206, 199)'
        },
        title: "No-code paywall builder",
        description: "Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.",
        cta: "Create paywalls within minutes",
        href: "https://adapty.io/paywall-builder/",
        testimonial: {
            quote: "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins.",
            companyImg: "https://adapty.io/assets/uploads/2024/02/app-icon-cat.png",
            appName: "Moodworks Inc",
            appDesc: "Mental health apps",
            author: "Mike McSweeney",
            role: "Chief Product Officer",
            avatar: "https://adapty.io/assets/uploads/2024/02/Mike-McSweeney-Moodworks-inc@2x.webp",
        },
    },
    {
        media: {
            width: 768,
            height: 631,
            sources: [
                { srcSet: "https://adapty.io/assets/uploads/2025/04/funnelfox-feature@1.5x.webp", media: "(max-width: 358px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x.webp", media: "(max-width: 767px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/04/funnelfox-feature@1.5x.webp", media: "(max-width: 991px)" },
                { srcSet: "https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x.webp" },
            ],
            alt: "FunnelFox",
            src: "https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x-768x631.webp",
            background: 'rgb(240,240,240)'
        },
        title: "Boost app revenue fast with web funnels",
        description: "Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.",
        cta: "Explore FunnelFox",
        href: "https://funnelfox.com/",
        testimonial: null,
    },
];

export { benefitsList };
export type { BenefitItem };