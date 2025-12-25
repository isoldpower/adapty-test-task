import { lazy } from "react"

export { LandingPageAdapty } from "./ui/landing-page-adapty.tsx"

export const LandingPageLazy = lazy(() => import('./ui/landing-page-adapty.tsx'));
