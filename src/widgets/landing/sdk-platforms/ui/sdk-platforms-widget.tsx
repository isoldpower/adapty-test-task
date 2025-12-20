import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { SdkPlate } from "./sdk-plate.tsx";

const SDK_REFERENCES = [
    {
        title: "Swift SDK",
        iconSrc: "https://adapty.io/assets/uploads/2024/01/icon-swift-64x64-1.svg",
        href: "https://adapty.io/sdk/ios/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/01/icon-swift-outline.svg",
    },
    {
        title: "Kotlin SDK",
        iconSrc: "https://adapty.io/assets/uploads/2024/01/icon-kotlin-64x64-1.svg",
        href: "https://adapty.io/sdk/android/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/01/icon-kotlin-outline.svg",
    },
    {
        title: "React Native SDK",
        iconSrc: "https://adapty.io/assets/uploads/2024/01/icon-react-native-64x64-1.svg",
        href: "https://adapty.io/sdk/react-native/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/01/icon-react-outline.svg",
    },
    {
        title: "Unity SDK",
        iconSrc: "https://adapty.io/assets/uploads/2024/01/icon-unity-white-64x64-1.svg",
        href: "https://adapty.io/sdk/unity/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/01/icon-unity-outline.svg",
    },
    {
        title: "Flutter SDK",
        iconSrc: "https://adapty.io/assets/uploads/2024/01/icon-flutter-64x64-1.svg",
        href: "https://adapty.io/sdk/flutter/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/01/icon-flutter-outline.svg",
    },
    {
        title: "Capacitor SDK",
        iconSrc: "https://adapty.io/assets/uploads/2025/10/capacitor-logo.svg",
        href: "https://adapty.io/sdk/capacitor/",
        backgroundSrc: "https://adapty.io/assets/uploads/2025/10/capacitor-stroke-gradient-logo.webp",
    },
    {
        title: "Kotlin Multiplatform",
        iconSrc: "https://adapty.io/assets/uploads/2025/10/kmp-logo.svg",
        href: "https://adapty.io/sdk/kmp/",
        backgroundSrc: "https://adapty.io/assets/uploads/2025/10/kmp-stroke-gradient-logo.webp",
    },
    {
        title: "FlutterFlow",
        iconSrc: "https://adapty.io/assets/uploads/2024/09/icon-flutterflow-64x64-1.svg",
        href: "https://adapty.io/sdk/flutterflow/",
        backgroundSrc: "https://wp-prod-new.adapty.io/assets/uploads/2024/09/icon-flutterflow-outline.svg",
    },
    {
        title: "Web API",
        iconSrc: "https://adapty.io/assets/uploads/2024/01/icon-web-64x64-1.svg",
        href: "https://adapty.io/sdk/web/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/01/icon-web-outline.svg",
    },
    {
        title: "Stripe",
        iconSrc: "https://adapty.io/assets/uploads/2024/02/icon-stripe-64x64-1.svg",
        href: "https://adapty.io/integrations/stripe/",
        backgroundSrc: "https://adapty.io/assets/uploads/2024/02/icon-stripe-outline.svg",
    },
];

export function SdkPlatformsWidget() {
    return (
        <AdaptySection className="bg-a-bg-accent">
            <AdaptyContainer>
                <div className="w-full text-center mb-15">
                    <h2 className="text-accent-foreground flex flex-col items-center mb-4 font-normal tracking-tight text-balance">
                        Get the SDK for your platform
                    </h2>
                </div>

                <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full">
                    {SDK_REFERENCES.map((platform) => (
                        <SdkPlate
                            key={platform.title}
                            title={platform.title}
                            iconSrc={platform.iconSrc}
                            href={platform.href}
                            backgroundSrc={platform.backgroundSrc}
                        />
                    ))}
                </div>
            </AdaptyContainer>
        </AdaptySection>
    )
}
