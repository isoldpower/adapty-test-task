import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";

const METRICS = [
  { value: "$2B", label: "tracked revenue" },
  { value: "99.99%", label: "historical uptime" },
  { value: "2.5B", label: "users served" },
  { value: "60B", label: "API calls / month" },
]

export function AchievementsWidget() {
  return (
    <AdaptySection className="bg-a-bg-cold">
      <AdaptyContainer>
        <div className="mb-12 text-center">
            <h2 className="flex flex-col items-center mb-4 font-normal tracking-tight text-balance">
              Adapty processes subscription revenue with the industry’s highest SLA Rate
          </h2>
        </div>

        <div className="w-full grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center text-center gap-4">
              <div className="font-bold text-7xl mb-2">
                {metric.value}
              </div>
              <div className="text-2xl font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>
      </AdaptyContainer>
    </AdaptySection>
  )
}
