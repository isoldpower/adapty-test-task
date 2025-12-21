import { CenteredGroup } from "@entities/landing/containers";
import { ThinSectionTitle } from "@entities/landing/typography";
import { ProductFeatureBlock } from "@widgets/landing/product-contents";
import { productFeatures } from "../config/features-list.ts";

function ProductContentsSection() {
    return (
        <>
            <CenteredGroup className='mb-16'>
                <ThinSectionTitle className="flex flex-col items-center">
                    <span>Help your team run the mobile subscription business.</span>
                    <span>Faster and cheaper.</span>
                </ThinSectionTitle>
            </CenteredGroup>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                {productFeatures.map((feature) => (
                    <ProductFeatureBlock {...feature} />
                ))}
            </div>
        </>
    );
}

export { ProductContentsSection };