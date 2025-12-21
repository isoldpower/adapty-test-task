import { ArrowRight } from "lucide-react";
import { Button } from "@shared/ui-toolkit";
import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup, TrupleGridGroup } from "@entities/landing/containers";
import { CaseStudyCard } from "@widgets/landing/case-study";
import { caseStudies } from "../config/case-studies.ts";


function CaseStudySection() {
    return (
        <CenteredGroup className='gap-12'>
            <ThinSectionTitle className="text-center mb-4">
                Read the real cases of our customers
            </ThinSectionTitle>
            <TrupleGridGroup firstBreakpoint='sm' secondBreakpoint='lg' className='gap-6'>
                {caseStudies.map((caseStudy) => (
                    <CaseStudyCard
                        key={caseStudy.company.name}
                        caseStudy={caseStudy}
                    />
                ))}
            </TrupleGridGroup>
            <Button size="lg" variant="link" className="gap-2 bg-transparent text-2xl">
                Read all cases
                <ArrowRight className="h-5 w-5"/>
            </Button>
        </CenteredGroup>
    );
}

export { CaseStudySection };