import {ArrowRight} from "lucide-react";

import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup, TextAndMediaGroup } from "@entities/landing/containers";
import { CodeBlock } from "@widgets/landing/sdk-integration";
import { TestimonialCard } from "@widgets/landing/testimonials";
import { integrationPlatformSamples } from "../config/integration-platform-samples.ts";
import { integrationQuote } from "../config/integration-quote.ts";


function SDKIntegrationSection() {
    return (
        <CenteredGroup className='gap-16'>
            <ThinSectionTitle className='text-accent-foreground'>
                Integrate in-app purchases with a few lines of code
            </ThinSectionTitle>
            <TextAndMediaGroup breakEarly>
                <div className='flex flex-col gap-10 text-white'>
                    <p className='text-2xl leading-loose'>
                        Integrate APIs within a few hours without server coding.
                        Adapty handles the correct subscription state, taking everything under the hood,
                        from free trials to refunds, in a simple, developer-friendly SDK.
                    </p>
                    <div className='flex gap-4 items-center text-2xl mb-6'>
                        <span>Make subscriptions easy</span>
                        <ArrowRight className="h-6 w-6" />
                    </div>
                    <TestimonialCard negative {...integrationQuote} />
                </div>
                <CodeBlock
                    tabs={integrationPlatformSamples}
                    githubUrl='https://github.com/isoldpower/adapty-test-task'
                />
            </TextAndMediaGroup>
        </CenteredGroup>
    );
}

export { SDKIntegrationSection };