import { ArrowRight } from "lucide-react";

import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup, TextAndMediaGroup } from "@entities/landing/containers";
import { CodeBlock } from "@widgets/landing/sdk-integration";
import { TestimonialCard } from "@widgets/landing/testimonials";
import { integrationPlatformSamples } from "../config/integration-platform-samples.ts";
import { integrationQuote } from "../config/integration-quote.ts";


function SDKIntegrationSection() {
    return (
        <CenteredGroup className='gap-20'>
            <ThinSectionTitle className='text-gray-900'>
                Integrate in-app purchases with a few lines of code
            </ThinSectionTitle>
            <TextAndMediaGroup breakEarly>
                <div className='flex flex-col gap-10 text-foreground'>
                    <p className='text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700'>
                        Integrate APIs within a few hours without server coding.
                        Adapty handles the correct subscription state, taking everything under the hood,
                        from free trials to refunds, in a simple, developer-friendly SDK.
                    </p>
                    <div className='flex gap-4 items-center text-lg sm:text-xl md:text-2xl mb-6 text-gray-900 font-medium'>
                        <span>Make subscriptions easy</span>
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="transform transition-transform duration-300">
                        <TestimonialCard {...integrationQuote} />
                    </div>
                </div>
                <div className="transform max-w-full w-full transition-transform duration-300">
                    <CodeBlock
                        tabs={integrationPlatformSamples}
                        githubUrl='https://github.com/isoldpower/adapty-test-task'
                    />
                </div>
            </TextAndMediaGroup>
        </CenteredGroup>
    );
}

export { SDKIntegrationSection };