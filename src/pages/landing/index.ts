import { lazy } from "react"

export { LandingPage } from "./ui/landing-page"

export const LandingPageLazy = lazy(() => import('./ui/landing-page.tsx'));
