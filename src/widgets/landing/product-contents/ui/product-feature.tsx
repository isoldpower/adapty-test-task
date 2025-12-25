import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { ArrowRight } from "lucide-react";

import { FlexContainerGroup, InlineGroup } from "@entities/landing/containers";
import { DefaultHeading, MutedLabel } from "@entities/landing/typography";
import { FeatureLabelPaper, ProductFeaturePaper } from "@entities/landing/papers";
import { RedirectToFeatureDocs } from "@features/landing/navigation";
import type { ImageSource } from "@entities/landing/responsive-picture";
import type { FeatureType } from "@features/landing/navigation";
import {cn} from "@shared/lib/utils.ts";

interface ProductFeatureBlockProps {
    image: {
        src: string;
        sources: ImageSource[];
        alt: string;
    };
    title: string;
    hrefType: FeatureType;
    labels: string[];
    large?: boolean;
}

function ProductFeatureBlock({
   image,
   title,
   hrefType,
   labels,
    large = false
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
                    className={cn("mb-6")}
                />
                <div className='px-8 py-4 gap-4 flex flex-col items-center'>
                    <InlineGroup breakpoint='all' gap={4}>
                        <DefaultHeading heading={large ? 'h2' : 'h4'}>
                            {title}
                        </DefaultHeading>
                        <ArrowRight className={cn(
                            "size-4 transition-transform group-hover:translate-x-1",
                            "size-8"
                        )} />
                    </InlineGroup>

                    <FlexContainerGroup className="text-center justify-center gap-2">
                        {labels.map((label) => (
                            <FeatureLabelPaper
                                key={label}
                                className={cn(
                                    "px-4 py-2",
                                    !large && "w-full text-clip max-w-[calc(50%-2*var(--spacing))] line-clamp-1"
                                )}
                            >
                                <MutedLabel className={cn(!large && "text-lg! leading-[150%]")}>
                                    {label}
                                </MutedLabel>
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