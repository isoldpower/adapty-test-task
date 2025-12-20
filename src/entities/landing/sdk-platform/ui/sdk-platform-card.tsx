import { Card } from "@shared/ui-toolkit/card"
import { Github } from "lucide-react"

interface SdkPlatformCardProps {
  name: string
  icon: string
  githubUrl: string
}

export function SdkPlatformCard({ name, icon, githubUrl }: SdkPlatformCardProps) {
  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <Card className="group relative overflow-hidden border-2 p-6 text-center transition-all hover:border-accent hover:shadow-lg">
        <div className="absolute right-2 top-2 text-muted-foreground/20 transition-all group-hover:text-accent">
          <Github className="h-4 w-4" />
        </div>
        <div className="mb-3 text-4xl">{icon}</div>
        <div className="font-semibold">{name}</div>
      </Card>
    </a>
  )
}
