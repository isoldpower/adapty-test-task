import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";

const TRUSTED_COMPANIES = [
    { name: "Feeld", logo: "https://adapty.io/assets/uploads/2024/01/logo-feeld-gray.svg" },
    { name: "Bumble", logo: "https://adapty.io/assets/uploads/2024/01/logo-bumble-gray.svg" },
    { name: "Weewoo", logo: "https://adapty.io/assets/uploads/2025/02/weewoo.svg" },
    { name: "AppNation", logo: "https://adapty.io/assets/uploads/2025/02/AppNation.webp" },
    { name: "Almus", logo: "https://adapty.io/assets/uploads/2025/02/almus.svg" },
    { name: "Impala Studios", logo: "https://adapty.io/assets/uploads/2024/01/logo-text-impala-studios-gray.svg" },
    { name: "HUBX", logo: "https://adapty.io/assets/uploads/2024/01/logo-hubx-gray.svg" },
]

export function TrustBadgesWidget() {
  return (
    <AdaptySection className="border-b bg-a-bg-warm py-12">
      <AdaptyContainer className="items-center">
        <p className="mb-8 text-center text-3xl font-thin text-muted-foreground tracking-wider">
            Trusted by 15,000+ apps and the world's largest app publishers
        </p>
        <div className="flex gap-12 justify-around items-center">
          {TRUSTED_COMPANIES.map((company) => (
            <div key={company.name} className="grayscale transition-all hover:grayscale-0">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className="max-h-11 w-auto object-contain opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </AdaptyContainer>
    </AdaptySection>
  )
}
