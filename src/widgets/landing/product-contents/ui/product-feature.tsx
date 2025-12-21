import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { ArrowRight } from "lucide-react";

import { FlexContainerGroup, InlineGroup } from "@entities/landing/containers";
import { DefaultHeading, MutedLabel } from "@entities/landing/typography";
import { FeatureLabelPaper, ProductFeaturePaper } from "@entities/landing/papers";
import { RedirectToFeatureDocs } from "@features/landing/navigation";
import type { ImageSource } from "@entities/landing/responsive-picture";
import type { FeatureType } from "@features/landing/navigation";

interface ProductFeatureBlockProps {
    image: {
        src: string;
        sources: ImageSource[];
        alt: string;
    };
    title: string;
    hrefType: FeatureType;
    labels: string[];
}

function ProductFeatureBlock({
   image,
   title,
   hrefType,
   labels,
}: ProductFeatureBlockProps) {
    return (
        <ProductFeaturePaper>
            <RedirectToFeatureDocs hrefType={hrefType}>
                <ResponsivePicture
                    src={image.src}
                    sources={image.sources}
                    height={396}
                    width={707}
                    alt={image.alt}
                    className="mb-6"
                />
                <div className='px-8 py-4 gap-4 flex flex-col items-center'>
                    <InlineGroup breakpoint='all' gap={4}>
                        <DefaultHeading heading='h4'>
                            {title}
                        </DefaultHeading>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </InlineGroup>

                    <FlexContainerGroup className="text-center gap-2">
                        {labels.map((label) => (
                            <FeatureLabelPaper key={label} className="px-4 py-2">
                                <MutedLabel>{label}</MutedLabel>
                            </FeatureLabelPaper>
                        ))}
                    </FlexContainerGroup>
                </div>
            </RedirectToFeatureDocs>
        </ProductFeaturePaper>
    );
}

export { ProductFeatureBlock };
export type { ProductFeatureBlockProps, FeatureType };