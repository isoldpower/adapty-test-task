import { CenteredGroup } from "@entities/landing/containers";
import { ThinSectionTitle } from "@entities/landing/typography";
import { ProductFeatureBlock } from "@widgets/landing/product-contents";
import { productFeatures } from "../config/features-list.ts";

import { FeatureBlock } from "@entities/landing/feature-block";
import {cn} from "@shared/lib/utils.ts";

function ProductContentsSection() {
    return (
        <>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
                <CenteredGroup className='mb-20 col-span-2'>
                    <ThinSectionTitle className="flex flex-col items-center text-gray-900">
                        <span>Help your team run the mobile subscription business.</span>
                        <span className="text-gray-600">Faster and cheaper.</span>
                    </ThinSectionTitle>
                </CenteredGroup>
                {productFeatures.map((feature, index) => (
                    <FeatureBlock key={index} className={cn(
                        "p-0!",
                        index === 0 && "row-span-2 col-span-2"
                    )}>
                        <ProductFeatureBlock large={index === 0} {...feature} />
                    </FeatureBlock>
                ))}
            </div>
        </>
    );
}

export { ProductContentsSection };