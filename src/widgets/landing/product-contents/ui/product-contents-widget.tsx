import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { FeatureBlock } from "./product-feature.tsx";

const PRODUCT_FEATURES = [
    {
        image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp',
        title: "For Developers",
        href: './for-developers',
        labels: ['Subscriptions SDK', "Refund Saver", "Remote config", "Fallback paywalls"],
    },
    {
        image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp',
        title: "For app owners",
        href: './for-app-owners',
        labels: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
    },
    {
        image: 'https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp',
        title: "For marketers",
        href: './for-marketers',
        labels: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
    },
]

export function ProductContentsWidget() {
  return (
    <AdaptySection className='bg-a-bg-website'>
      <AdaptyContainer>
        <div className="w-full mb-16 text-center">
          <h2 className="flex flex-col items-center mb-4 font-normal tracking-tight">
              <span>
                Help your team run the mobile subscription business.
              </span>
              <span>
                Faster and cheaper.
              </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {PRODUCT_FEATURES.map((feature) => (
              <FeatureBlock {...feature} />
          ))}
        </div>
      </AdaptyContainer>
    </AdaptySection>
  )
}
