import { DefaultHeading } from "@entities/landing/typography";
import { InlineGroup } from "@entities/landing/containers";
import { FooterCtaButton } from "@entities/landing/website-footer";

function FooterHeadingWidget() {
    return (
        <InlineGroup breakpoint="md" gap={6} className="justify-between w-full">
            <DefaultHeading heading='h3' className='text-balance w-full md:w-auto text-center md:text-start'>
                Get started today or schedule a demo <br />
                for your personal onboarding
            </DefaultHeading>
            <div className="flex flex-nowrap w-full md:w-auto items-stretch md:items-center gap-6">
                <FooterCtaButton className="w-1/2 md:max-w-[250px] md:w-auto" variant="secondary">
                    <span>Start for free</span>
                </FooterCtaButton>
                <FooterCtaButton className="w-1/2 md:max-w-[250px] md:w-auto" variant="primary">
                    <span>Schedule a demo</span>
                </FooterCtaButton>
            </div>
        </InlineGroup>
    );
}

export { FooterHeadingWidget };