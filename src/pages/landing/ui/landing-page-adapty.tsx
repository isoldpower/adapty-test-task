import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { LandingHeroSection } from "@processes/landing/hero-section";
import { TrustBadgesSection } from "@processes/landing/trust-badges-section";
import { ProductContentsSection } from "@processes/landing/product-contents";
import { AchievementsSection } from "@processes/landing/achievements";
import { SDKPlatformsList, SDKIntegrationSection } from "@processes/landing/sdk-integration";
import { ProductBenefitsSection } from "@processes/landing/benefits-section";
import { CEOTestimonialsSection } from "@processes/landing/testimonials-section";
import { EnterpriseSection } from "@processes/landing/enterprise-section";
import { CaseStudySection } from "@processes/landing/casestudy-section";
import { FooterSection } from "@processes/landing/footer-section";
import {cn} from "@shared/lib/utils.ts";
import {CenteredGroup} from "@entities/landing/containers";


export function LandingPageAdapty() {
    return (
        <>
            <AdaptySection
                variant='hero' 
                showGrid
                gridVariant='default'
                interactiveGrid 
                className="w-full min-h-screen flex items-center !py-20 sm:!py-24 md:!py-32"
            >
                <AdaptyContainer className="w-full flex flex-col gap-40">
                    <LandingHeroSection />
                    <TrustBadgesSection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <hr className='w-full mt-2' />
            <AdaptySection variant='default' className="py-0! overflow-visible!">
                <AdaptyContainer className={cn(
                    "mx-1 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto",
                    "before:content-[_] before:absolute before:left-0 before:-top-[10%] before:-bottom-[10%] before:h-[120%] before:border-l before:opacity-10",
                    "after:content-[_] after:absolute after:right-0 after:-top-[10%] after:-bottom-[10%] after:h-[120%] after:border-r after:opacity-10"
                )}>
                    <AchievementsSection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <hr className='w-full mt-2' />
            <AdaptySection variant='grid' showGrid interactiveGrid gridVariant='default' className="py-20 sm:py-24 md:py-32">
                <AdaptyContainer className={cn(
                    "py-16 sm:py-20 md:py-24 mx-auto",
                    "before:content-[_] before:absolute before:left-0 before:-top-[10%] before:-bottom-[10%] before:h-[120%] before:border-l before:opacity-10",
                    "after:content-[_] after:absolute after:right-0 after:-top-[10%] after:-bottom-[10%] after:h-[120%] after:border-r after:opacity-10"
                )}>
                    <ProductContentsSection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <AdaptySection className="py-0! overflow-visible!">
                <AdaptyContainer className={cn(
                    "py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto",
                    "before:content-[_] before:absolute before:left-0 before:-top-[10%] before:-bottom-[10%] before:h-[120%] before:border-l before:opacity-10",
                    "after:content-[_] after:absolute after:right-0 after:-top-[10%] after:-bottom-[10%] after:h-[120%] after:border-r after:opacity-10"
                )}>
                    <CenteredGroup className="gap-40">
                        <SDKIntegrationSection />
                        <SDKPlatformsList />
                    </CenteredGroup>
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <hr className='w-full mt-2' />
            <AdaptySection variant='feature' gridOpacity={0.02} showGrid gridVariant='subtle' className="py-20 sm:py-24 md:py-32">
                <AdaptyContainer>
                    <ProductBenefitsSection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <hr className='w-full mt-2' />
            <AdaptySection className="py-0! overflow-visible!">
                <AdaptyContainer className={cn(
                    "py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 mx-auto",
                    "before:content-[_] before:absolute before:left-0 before:-top-[10%] before:-bottom-[10%] before:h-[120%] before:border-l before:opacity-10",
                    "after:content-[_] after:absolute after:right-0 after:-top-[10%] after:-bottom-[10%] after:h-[120%] after:border-r after:opacity-10"
                )}>
                    <CEOTestimonialsSection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <hr className='w-full mt-2' />
            <AdaptySection showGrid interactiveGrid gridVariant='default' className="py-0! overflow-visible!">
                <AdaptyContainer className={cn(
                    "py-16 sm:py-20 mx-auto",
                    "before:content-[_] before:absolute before:left-0 before:-top-[10%] before:-bottom-[10%] before:h-[120%] before:border-l before:opacity-10",
                    "after:content-[_] after:absolute after:right-0 after:-top-[10%] after:-bottom-[10%] after:h-[120%] after:border-r after:opacity-10"
                )}>
                    <EnterpriseSection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <AdaptySection className="py-0! overflow-visible!">
                <AdaptyContainer className={cn(
                    "py-16 sm:py-24 pb-40! mx-auto",
                    "before:content-[_] before:absolute before:left-0 before:-top-[10%] before:-bottom-[10%] before:h-[120%] before:border-l before:opacity-10",
                    "after:content-[_] after:absolute after:right-0 after:-top-[10%] after:-bottom-[10%] after:h-[120%] after:border-r after:opacity-10"
                )}>
                    <CaseStudySection />
                </AdaptyContainer>
            </AdaptySection>
            <hr className='w-full' />
            <hr className='w-full mt-2 mb-16' />
            <AdaptySection className='bg-a-black-light-x1! pb-12 pt-16 sm:pt-20'>
                <AdaptyContainer>
                    <FooterSection />
                </AdaptyContainer>
            </AdaptySection>
        </>
    );
}

export default LandingPageAdapty;
