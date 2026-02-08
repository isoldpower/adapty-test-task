import { CenteredGroup, FlexContainerGroup } from "@entities/landing/containers";
import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { TrustedSectionTitle } from "@entities/landing/typography";
import { TrustedCompanyHover } from "@features/landing/hover-animations";

import { trustedCompanies } from "../config/trusted-companies.ts";

function TrustBadgesSection() {
    return (
        <CenteredGroup className='gap-8'>
            <TrustedSectionTitle>
                Trusted by 15,000+ apps and the world's largest app publishers
            </TrustedSectionTitle>
            <FlexContainerGroup>
                {trustedCompanies.map((company) => (
                    <TrustedCompanyHover key={company.name}>
                        <ResponsivePicture
                            className="max-h-11 w-auto object-contain"
                            {...company.logo}
                        />
                    </TrustedCompanyHover>
                ))}
            </FlexContainerGroup>
        </CenteredGroup>
    );
}

export { TrustBadgesSection };