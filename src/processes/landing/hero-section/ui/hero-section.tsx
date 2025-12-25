import { Button } from "@shared/ui-toolkit";
import { ArrowRight } from "lucide-react";
import { HeroSectionDescription, HeroSectionTitle } from "@entities/landing/typography";
import { EBookReference, HeroEmailCapture } from "@widgets/landing/hero-cta";
import { InlineGroup } from "@entities/landing/containers";
import { ResponsivePicture } from "@entities/landing/responsive-picture";


function LandingHeroSection() {
    return (
        <div className="w-full flex flex-col gap-2 md:gap-8">
            <div className="w-full md:mt-10 flex flex-col items-center text-center">
                <div className="relative">
                    <HeroSectionTitle>
                        Revenue management <br/> for in-app purchases
                    </HeroSectionTitle>
                    <div className="md:absolute md:-top-[20%] lg:-top-[10%] -right-[20%] md:rotate-6">
                        <EBookReference />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
                <div className="flex justify-center relative w-full max-w-7xl text-center">
                    <HeroSectionDescription>
                        Save months on integrating subscriptions and double your app revenue with paywall management.
                    </HeroSectionDescription>
                </div>
                <InlineGroup breakpoint='sm' className="w-full gap-2 sm:gap-6 mt-10 justify-center">
                    <div className="w-full max-w-[500px]">
                        <HeroEmailCapture />
                    </div>
                    <Button variant="link" size="lg" className="inline-flex items-center gap-2 text-2xl text-gray-700 hover:text-gray-900 transition-colors">
                        <span>Book a demo</span>
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                    </Button>
                </InlineGroup>
            </div>

            <div className="w-full mt-8 sm:mt-40">
                <div className="grid grid-cols-2 flex-col gap-4 sm:gap-6 md:gap-8">
                    {/* First full-width image */}
                    <div className="col-span-2 w-full rounded-2xl overflow-hidden group">
                        <div className="w-full relative">
                            <ResponsivePicture
                                sources={[
                                    { srcSet: 'https://adapty.io/assets/uploads/2025/07/screen-3-v2@2x.webp' }
                                ]}
                                src="https://adapty.io/assets/uploads/2025/07/screen-3-v2@2x.webp"
                                alt="Adapty Dashboard Overview"
                                width={1268}
                                height={1060}
                                className="w-full h-full object-contain"
                                pictureClassName="w-full h-full"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-subgrid col-span-2 w-full gap-4 sm:gap-6 md:gap-8 max-h-[300px]">
                        <div className="rounded-2xl overflow-hidden w-full will-change-transform hover:rotate-1 hover:scale-105 duration-100 relative">
                            <ResponsivePicture
                                sources={[
                                    { srcSet: 'https://adapty.io/assets/uploads/2024/02/img-predicted-winner@2x.webp' }
                                ]}
                                src="https://adapty.io/assets/uploads/2024/02/img-predicted-winner@2x.webp"
                                alt="Adapty Dashboard Overview"
                                width={1268}
                                height={1060}
                                className="w-full h-full object-cover"
                                pictureClassName="w-full h-full"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                        <div className="group rounded-2xl overflow-hidden w-full will-change-transform hover:-rotate-1 hover:scale-105 duration-100 relative">
                            <h4 className="flex absolute duration-100 group-hover:rotate-2 scale-0 origin-left group-hover:scale-100 z-10 top-[5%] left-[5%] right-[5%]">
                                <span className="relative group-hover:before:content-[_] group-hover:before:absolute group-hover:before:border-bg-a-accent group-hover:before:border-b group-hover:before:left-0 group-hover:before:bottom-0 group-hover:before:w-full bg-a-black-light-x2 text-accent-foreground font-thin p-2 rounded-2xl">
                                    Explore our featured product
                                </span>
                            </h4>
                            <ResponsivePicture
                                sources={[
                                    { srcSet: 'https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x.webp' }
                                ]}
                                src="https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x.webp"
                                alt="Adapty Dashboard Overview"
                                width={1268}
                                height={1060}
                                className="w-full h-full object-cover"
                                pictureClassName="w-full h-full"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LandingHeroSection };