import { trustedCompanies } from "../config/trusted-companies.ts";
import { TrustedSectionTitle } from "@entities/landing/typography";
import { CenteredGroup, FlexContainerGroup } from "@entities/landing/containers";
import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { TrustedCompanyHover } from "@features/landing/hover-animations";

function TrustBadgesSection() {
    return (
        <CenteredGroup className='gap-10 sm:gap-12'>
            <TrustedSectionTitle className="text-gray-700 text-lg sm:text-xl md:text-2xl">
                Trusted by 15,000+ apps and the world's largest app publishers
            </TrustedSectionTitle>
            <FlexContainerGroup className="flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
                {trustedCompanies.map((company) => (
                    <TrustedCompanyHover key={company.name}>
                        <div className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                            <ResponsivePicture
                                className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain"
                                {...company.logo}
                            />
                        </div>
                    </TrustedCompanyHover>
                ))}
            </FlexContainerGroup>
        </CenteredGroup>
    )
}

export { TrustBadgesSection };