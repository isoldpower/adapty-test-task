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


export function LandingPageAdapty() {
    return (
        <>
            <AdaptySection variant='warm'>
                <AdaptyContainer>
                    <LandingHeroSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='warm'>
                <AdaptyContainer>
                    <TrustBadgesSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <ProductContentsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='cold'>
                <AdaptyContainer>
                    <AchievementsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent'>
                <AdaptyContainer>
                    <SDKIntegrationSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent' className="py-0!">
                <AdaptyContainer>
                    <hr className='accent-a-white w-full opacity-10' />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent'>
                <AdaptyContainer>
                    <SDKPlatformsList />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <ProductBenefitsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent'>
                <AdaptyContainer>
                    <CEOTestimonialsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <EnterpriseSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <CaseStudySection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent' className='pb-12!'>
                <AdaptyContainer>
                    <FooterSection />
                </AdaptyContainer>
            </AdaptySection>
        </>
    );
}

export default LandingPageAdapty;
