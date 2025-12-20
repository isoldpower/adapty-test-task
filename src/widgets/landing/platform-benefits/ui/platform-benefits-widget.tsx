import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import {cn} from "@shared/lib/utils.ts";

const PLATFORM_FEATURES = [
    {
        title: "Secure",
        labels: [
            {label: "SOC2 verified"},
            {label: "Encrypted"},
            {label: "24/7 global fraud monitoring"}
        ]
    },
    {
        title: "Reliable",
        labels: [
            { label: "99.99% SLA", href: "https://status.adapty.io/?_ga=2.123025353.339646607.1672001945-1139331965.1672001945" },
            { label: "Over $500M/year of in-app purchases processed" },
        ]
    },
    {
        title: "Responsive",
        labels: [
            { label: "Dedicated customer success manager" },
            { label: "Direct communication via Slack" },
            { label: "Live chat on the website" },
            { label: "Four ways to reach us" },
        ]
    },
]

export function PlatformBenefitsWidget() {
    return (
        <AdaptySection className="bg-a-bg-website">
            <AdaptyContainer>
                <div className="w-full text-left md:text-center mb-10">
                    <h2 className="flex flex-col items-center mb-4 font-normal tracking-tight text-balance">
                        Enterprise-grade platform
                    </h2>
                </div>
                <div className="w-full grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3">
                    {PLATFORM_FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className={cn(
                                "flex flex-col gap-4 pl-12 py-6",
                                "md:first:border-none border-l-2 border-purple-600"
                            )}
                        >
                            <h3 className="text-5xl font-bold text-gray-900">{feature.title}</h3>
                            <ul className="text-2xl flex flex-col gap-3">
                                {feature.labels.map((item) => (
                                    <li key={item.label} className="text-gray-700">
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:text-gray-900 transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            item.label
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </AdaptyContainer>
        </AdaptySection>
    );
};
