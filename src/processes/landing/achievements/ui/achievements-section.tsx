import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup, EvenGridGroup } from "@entities/landing/containers";
import { adaptyMetrics } from "../config/metrics.ts";

function AchievementsSection() {
    return (
        <>
            <ThinSectionTitle className='mb-16'>
                Adapty processes subscription revenue with the industry’s highest SLA Rate
            </ThinSectionTitle>
            <EvenGridGroup className="w-full gap-6">
                {adaptyMetrics.map((metric, index) => (
                    <CenteredGroup className='gap-4' key={index}>
                        <div className="font-bold text-7xl mb-2">{metric.value}</div>
                        <div className="text-2xl font-semibold">{metric.label}</div>
                    </CenteredGroup>
                ))}
            </EvenGridGroup>
        </>
    );
}

export { AchievementsSection };