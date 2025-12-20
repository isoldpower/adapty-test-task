import { CaseStudyCard } from "@entities/landing/case-study"
import { Button } from "@shared/ui-toolkit/button"
import { ArrowRight } from "lucide-react"
import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";

const CASE_STUDIES = [
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp",
            name: "Productivity app",
            category: "Productivity",
        },
        result: "+50% in total revenue",
        description: "How pricing tests unlocked app's potential",
        href: "/case-studies/productivity-app-and-autopilot/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp",
            name: "Text on Pic",
            category: "Photo & Video",
        },
        result: "Over 30% MRR growth",
        description: "How to boost revenue with the right experiments",
        href: "/case-studies/photo-editing-app-and-autopilot/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp",
            name: "Trip planning",
            category: "Travel",
        },
        result: "+102% ARPU growth",
        description: "New onboarding and pricing strategy doubled revenue per user",
        href: "/case-studies/travel-app/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp",
            name: "Going Merry",
            category: "App publisher",
        },
        result: "5x MRR growth",
        description: "How to scale subscription revenue with Paywall Builder",
        href: "/case-studies/going-merry/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp",
            name: "Shmoody",
            category: "Mental health",
        },
        result: "ARR scaled from $0 to $2M",
        description: "How to grow from a free app to $2M ARR with Adapty",
        href: "/case-studies/shmoody/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png",
            name: "Lively",
            category: "Health & Fitness",
        },
        result: "Refund rate dropped by 83%",
        description: "Saved 82% of potentially lost revenue",
        href: "/case-studies/lively/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp",
            name: "Glam AI",
            category: "Makeup & Beauty",
        },
        result: "ROAS from Adapty – 108%",
        description: "How to scale to $1.2M ARR in 3 months",
        href: "/case-studies/glam-ai/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp",
            name: "Pepapp",
            category: "Health & Fitness",
        },
        result: "400% ROI on Adapty",
        description: "How to make Adapty free with Refund Saver",
        href: "/case-studies/pepapp/",
    },
    {
        company: {
            logo: "https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp",
            name: "Fotorama",
            category: "Photo & Video",
        },
        result: "Refund rate dropped 40%",
        description: "How to decrease the refund rate with Adapty",
        href: "/case-studies/fotorama/",
    },
];

export function RealCasesWidget() {
    return (
        <AdaptySection className="bg-a-bg-website">
            <AdaptyContainer className="items-center">
                <div className="w-full text-left md:text-center mb-10">
                    <h2 className="flex flex-col items-center mb-4 font-normal tracking-tight text-balance">
                        Read the real cases of our customers
                    </h2>
                </div>
                <div className="w-full mb-12 grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
                    {CASE_STUDIES.map((caseStudy) => (
                        <CaseStudyCard key={caseStudy.company.name} {...caseStudy} />
                    ))}
                </div>
                <div className="text-center">
                    <Button size="lg" variant="link" className="gap-2 bg-transparent text-2xl">
                        Read all cases
                        <ArrowRight className="h-5 w-5"/>
                    </Button>
                </div>
            </AdaptyContainer>
        </AdaptySection>
    )
}
