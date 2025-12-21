import { Button } from "@shared/ui-toolkit";
import { ArrowRight } from "lucide-react";
import { HeroSectionDescription, HeroSectionTitle } from "@entities/landing/typography";
import { HeroOverviewMedia, HeroPaywallMedia } from "@widgets/landing/hero-media";
import { EBookReference, HeroEmailCapture } from "@widgets/landing/hero-cta";
import { HeroTextGroup, InlineGroup, TextMediaGroup } from "@entities/landing/containers";

function LandingHeroSection() {
    return (
        <TextMediaGroup>
            <HeroTextGroup>
                <EBookReference />
                <HeroSectionTitle>
                    Revenue management for in-app purchases
                </HeroSectionTitle>
                <HeroSectionDescription className="mb-10">
                    Save months on integrating subscriptions and double your app revenue with paywall management.
                </HeroSectionDescription>
                <InlineGroup breakpoint='lg'>
                    <HeroEmailCapture />
                    <Button variant="link" size="lg" className="inline-flex items-center gap-2 text-2xl">
                        <span>Book a demo</span>
                        <ArrowRight className="h-[16px]! w-[16px]!" />
                    </Button>
                </InlineGroup>
            </HeroTextGroup>
            <div className="md:ml-12">
                <div className="relative flex flex-col items-center justify-center gap-6">
                    <HeroOverviewMedia />
                    <HeroPaywallMedia />
                </div>
            </div>
        </TextMediaGroup>
    );
}

export { LandingHeroSection };