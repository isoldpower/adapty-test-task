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
                {enterpriseFeatures.map((feature, index) => (
                    <FeatureBlock 
                        key={feature.title}
                        variant={index === 0 ? 'elevated' : index === 1 ? 'gradient' : 'bordered'}
                        className="border shadow-none bg-a-bg-warm hover:shadow-"
                    >
                        <EnterpriseAdvantage feature={feature} />
                    </FeatureBlock>
                ))}
            </div>
        </CenteredGroup>
    );
}

export { EnterpriseSection };