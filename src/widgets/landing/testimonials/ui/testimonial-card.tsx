import { TestimonialPaper } from "@entities/landing/papers";
import { ParagraphText } from "@entities/landing/typography";
import { CenteredGroup, ItemsGroup } from "@entities/landing/containers";
import { AuthorImage, TestimonialCompanyHeader, TestimonialCompanyImage } from "@entities/landing/testimonial";

interface TestimonialCardProps {
    companyImg: string
    companyTitle?: string
    companyDescription?: string
    quote: string
    author: string
    role: string
    avatar: string
}

export function TestimonialCard({
    quote,
    author,
    role,
    avatar,
    companyImg,
    companyDescription,
    companyTitle
}: TestimonialCardProps) {
    return (
        <TestimonialPaper className="flex flex-col gap-3 lg:gap-6">
            <CenteredGroup orientation="horizontal" className='lg:gap-6'>
                <TestimonialCompanyImage src={companyImg} alt={companyTitle} />
                <TestimonialCompanyHeader companyDescription={companyDescription} companyTitle={companyTitle} />
            </CenteredGroup>
            <ParagraphText>
                "{quote}"
            </ParagraphText>
            <CenteredGroup orientation="horizontal" className="gap-2 lg:gap-4">
                <AuthorImage avatar={avatar} />
                <ItemsGroup orientation="vertical">
                    <p className="text-lg lg:text-2xl font-medium">{author}</p>
                    <p className="text-gray-400 text-sm">{role}</p>
                </ItemsGroup>
            </CenteredGroup>
        </TestimonialPaper>
    );
}
