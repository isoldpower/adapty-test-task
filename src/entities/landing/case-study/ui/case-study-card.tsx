import { Card } from "@shared/ui-toolkit/card"
import { ArrowRight } from "lucide-react"
import { Button } from "@shared/ui-toolkit";

interface CaseStudyCardProps {
    company: {
        logo: string
        name: string
        category: string
    }
    result: string
    description: string
    href: string
}

export function CaseStudyCard({
    company,
    href,
    result,
    description
}: CaseStudyCardProps) {
    return (
        <Card className="flex flex-col justify-between overflow-hidden border-2 transition-all p-4">
            <div className="flex gap-4">
                <img
                    src={company.logo}
                    alt={company.name + " logo"}
                    className="w-[48px] h-[48px] rounded-xl object-cover transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col justify-center">
                    <div className="text-2xl font-semibold text-accent">{company.name}</div>
                    <div className="text-2xl text-muted-foreground">{company.category}</div>
                </div>
            </div>
            <div className="text-3xl font-bold text-[#9eb8d1]">{result}</div>
            <div className="text-2xl font-normal">{description}</div>
            <Button variant='secondary' asChild className="text-2xl h-14">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    Read more <ArrowRight className="ml-2 h-5 w-5"/>
                </a>
            </Button>
        </Card>
    )
}
