import { Container } from "@shared/ui-toolkit/container"
import { SdkPlatformCard } from "@entities/landing/sdk-platform"

const SDK_PLATFORMS = [
  { name: "React Native", icon: "⚛️", githubUrl: "https://github.com/yourcompany/sdk-react-native" },
  { name: "iOS (Swift)", icon: "🍎", githubUrl: "https://github.com/yourcompany/sdk-ios" },
  { name: "Android (Kotlin)", icon: "🤖", githubUrl: "https://github.com/yourcompany/sdk-android" },
  { name: "Flutter", icon: "🐦", githubUrl: "https://github.com/yourcompany/sdk-flutter" },
  { name: "Unity", icon: "🎮", githubUrl: "https://github.com/yourcompany/sdk-unity" },
  { name: "React", icon: "⚛️", githubUrl: "https://github.com/yourcompany/sdk-react" },
  { name: "Vue.js", icon: "💚", githubUrl: "https://github.com/yourcompany/sdk-vue" },
  { name: "Angular", icon: "🅰️", githubUrl: "https://github.com/yourcompany/sdk-angular" },
  { name: "Node.js", icon: "🟢", githubUrl: "https://github.com/yourcompany/sdk-node" },
  { name: "Python", icon: "🐍", githubUrl: "https://github.com/yourcompany/sdk-python" },
]

export function SdkPlatformsWidget() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">All Platforms Supported</h2>
          <p className="text-lg text-muted-foreground">Native SDKs maintained by our team</p>
        </div>

        <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SDK_PLATFORMS.map((platform) => (
            <SdkPlatformCard
              key={platform.name}
              name={platform.name}
              icon={platform.icon}
              githubUrl={platform.githubUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
