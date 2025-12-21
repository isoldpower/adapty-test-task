import { ArrowRight } from "lucide-react"
import { Button } from "@shared/ui-toolkit";
import { LevitatingPaper } from "@entities/landing/papers";
import { ItemsGroup } from "@entities/landing/containers";
import { CompanyLogo } from "@entities/landing/case-study";
import { MutedLabel, ParagraphText } from "@entities/landing/typography";
import { ExternalNavigation } from "@features/landing/navigation";


interface CaseStudyCard {
    company: {
        logo: string
        name: string
        category: string
    }
    result: string
    description: string
    href: string
}

interface CaseStudyCardProps {
    caseStudy: CaseStudyCard;
}

function CaseStudyCard({
    caseStudy: { company, description, result, href }
}: CaseStudyCardProps) {
    return (
        <LevitatingPaper>
            <ItemsGroup className="min-h-full justify-between gap-4">
                <ItemsGroup orientation="horizontal" className="gap-4 mb-2">
                    <CompanyLogo
                        src={company.logo}
                        alt={company.name + " logo"}
                    />
                    <div className="flex flex-col justify-center">
                        <ParagraphText className="font-semibold text-accent">
                            {company.name}
                        </ParagraphText>
                        <MutedLabel>
                            {company.category}
                        </MutedLabel>
                    </div>
                </ItemsGroup>
                <div className="text-2xl lg:text-3xl font-bold text-[#9eb8d1]">
                    {result}
                </div>
                <ParagraphText className="leading-normal!">
                    {description}
                </ParagraphText>
                <Button variant='secondary' asChild className="w-full text-2xl h-14">
                    <ExternalNavigation href={href}>
                        Read more <ArrowRight className="ml-2 h-5 w-5"/>
                    </ExternalNavigation>
                </Button>
            </ItemsGroup>
        </LevitatingPaper>
    );
}

export { CaseStudyCard };
export type { CaseStudyCardProps, CaseStudyCard };
