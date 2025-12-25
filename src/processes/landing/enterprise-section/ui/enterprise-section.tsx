import { enterpriseFeatures } from "../config/enterprise-features.ts";
import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup } from "@entities/landing/containers";
import { EnterpriseAdvantage } from "@widgets/landing/enterprise-advantage";

import { FeatureBlock } from "@entities/landing/feature-block";

function EnterpriseSection() {
    return (
        <CenteredGroup>
            <ThinSectionTitle className="mb-20 text-gray-900">
                Enterprise-grade platform
            </ThinSectionTitle>
            <div className="w-full grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
                {enterpriseFeatures.map((feature) => (
                    <FeatureBlock 
                        key={feature.title}
                        variant='gradient'
                        className="border shadow-none bg-a-bg-header hover:border-neutral-500"
                    >
                        <EnterpriseAdvantage feature={feature} />
                    </FeatureBlock>
                ))}
            </div>
        </CenteredGroup>
    );
}

export { EnterpriseSection };