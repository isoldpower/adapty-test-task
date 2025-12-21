import { enterpriseFeatures } from "../config/enterprise-features.ts";
import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup } from "@entities/landing/containers";
import { EnterpriseAdvantage } from "@widgets/landing/enterprise-advantage";

function EnterpriseSection() {
    return (
        <CenteredGroup>
            <ThinSectionTitle className="mb-16">
                Enterprise-grade platform
            </ThinSectionTitle>
            <div className="w-full grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3">
                {enterpriseFeatures.map((feature) => (
                    <EnterpriseAdvantage feature={feature} key={feature.title} />
                ))}
            </div>
        </CenteredGroup>
    );
}

export { EnterpriseSection };