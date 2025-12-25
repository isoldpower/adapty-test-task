import { TextAndMediaGroup } from "@entities/landing/containers";
import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { TestimonialCard as TestimonialCardWidget } from "@widgets/landing/testimonials";
import { ProductBenefitText } from "@widgets/landing/product-benefit";
import { benefitsList } from "../config/benefits-list.ts";

import type { BenefitItem } from "../config/benefits-list.ts";
import { useCallback } from "react";

function TestimonialCard({
    testimonial,
    ...benefit
}: BenefitItem) {
    return (
        <ProductBenefitText {...benefit}>
            {testimonial ? (
                <TestimonialCardWidget
                    companyTitle={testimonial.appName}
                    companyDescription={testimonial.appDesc}
                    {...testimonial}
                />
            ) : null}
        </ProductBenefitText>
    );
}

function ProductBenefitsSection() {
    const getOrderedChildren = useCallback((index: number, elements: React.ReactNode[]) => {
        return index % 2 === 1 ? elements.reverse() : elements;
    }, []);

    return (
        <div className="flex flex-col gap-32 w-full">
            {benefitsList.map(({ testimonial, ...benefit }, index) => (
                <TextAndMediaGroup breakEarly reversed={index % 2 === 1}>
                    {getOrderedChildren(index, [
                        <TestimonialCard testimonial={testimonial} {...benefit} />,
                        <ResponsivePicture
                            style={{backgroundColor: benefit.media.background, borderRadius: '12px'}}
                            className="max-h-[400px] w-full object-contain"
                            {...benefit.media}
                        />
                    ])}
                </TextAndMediaGroup>
            ))}
        </div>
    );
}

export { ProductBenefitsSection };