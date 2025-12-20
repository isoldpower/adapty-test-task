import { TestimonialCard } from "@entities/landing/testimonial"
import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { CodeBlock } from "./code-block.tsx";
import { TestimonialWithMedia } from "@widgets/landing/testimonials";
import { ArrowRight } from "lucide-react";

const SDK_PLATFORMS = [
    {
        label: "Swift",
        language: "swift",
        code: `// Your app's code
import Adapty
 
do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
 
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
    },
    {
        label: "Kotlin",
        language: "kotlin",
        code: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
\twhen (result) {
\t\tis AdaptyResult.Success -> {
\t\t\tif (result.value is AdaptyPurchaseResult.Success)
\t\t\t\t// successful purchase
\t\t}
\t\tis AdaptyResult.Error -> {
\t\t\t// handle the error
\t\t}
\t}
}`,
    },
    {
        label: "React Native",
        language: "tsx",
        code: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
\tconst profile = await adapty.makePurchase(product);
\t// successful purchase
} catch (error) {
\t// handle the error
}`,
    },
    {
        label: "Flutter",
        language: "dart",
        code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
    },
    {
        label: "Unity",
        language: "csharp",
        code: `// Your app's code
using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
\tif (error == null) {
\t\t// successful purchase
\t}
});`,
    },
];

export function SdkWidget() {
    return (
        <AdaptySection className="bg-a-bg-accent">
            <AdaptyContainer>
                <div className="w-full text-center mb-15">
                    <h2 className="text-accent-foreground flex flex-col items-center mb-4 font-normal tracking-tight text-balance">
                        Integrate in-app purchases with a few lines of code
                    </h2>
                </div>
                <TestimonialWithMedia
                    breakEarly
                    media={(
                        <CodeBlock
                            tabs={SDK_PLATFORMS}
                            githubUrl='https://github.com/isoldpower/adapty-test-task'
                        />
                    )}
                    testimonial={(
                        <div className='flex flex-col gap-10 text-white'>
                            <p className='text-2xl leading-loose'>
                                Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.
                            </p>
                            <div className='flex gap-4 items-center text-2xl mb-6'>
                                <span>Make subscriptions easy</span>
                                <ArrowRight className="h-6 w-6" />
                            </div>
                            <TestimonialCard
                                negative
                                quote="Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
                                author="Magnús Ólafsson"
                                role="Chief Technology Officer at Smitten"
                                companyImg="https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp"
                                avatar="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp"
                            />
                        </div>
                    )}
                />
            </AdaptyContainer>
        </AdaptySection>
    )
}
