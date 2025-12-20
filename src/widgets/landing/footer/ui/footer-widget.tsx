import { Button } from "@shared/ui-toolkit";
import {
    Twitter,
    Linkedin,
    Youtube,
    Github,
} from "lucide-react";
import {AdaptyContainer, AdaptySection} from "@entities/landing/adapty-section";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@shared/ui-toolkit/@shadcn/ui/select.tsx";

const footerLinks = {
    "Paywall management": [
        { label: "Paywall builder", href: "/paywall-builder" },
        { label: "Onboarding builder", href: "/onboarding-builder" },
        { label: "AI generator", href: "/ai-generator" },
        { label: "A/B testing", href: "/ab-testing" },
        { label: "Autopilot", href: "/autopilot" },
        { label: "Targeting", href: "/targeting" },
        { label: "Localization", href: "/localization" },
        { label: "Remote config", href: "/remote-config" },
    ],
    Infrastructure: [
        { label: "Subscription SDK", href: "/subscription-sdk" },
        { label: "Subscriber sync", href: "/subscriber-sync" },
        { label: "Fallback paywalls", href: "/fallback-paywalls" },
        { label: "Refund saver", href: "/refund-saver" },
        { label: "Integrations", href: "/integrations" },
    ],
    Roles: [
        { label: "For developers", href: "/for-developers" },
        { label: "For marketers", href: "/for-marketers" },
        { label: "For app owners", href: "/for-app-owners" },
    ],
    Stages: [
        { label: "Indie", href: "/indie" },
        { label: "Startups", href: "/startups" },
        { label: "Publishers", href: "/publishers" },
        { label: "Enterprise", href: "/enterprise" },
    ],
    Cases: [
        { label: "Integrate subscriptions", href: "/integrate-subscriptions" },
        { label: "Grow app revenue", href: "/grow-app-revenue" },
        { label: "Analyze performance", href: "/analyze-performance" },
        { label: "Read our cases", href: "/case-studies" },
    ],
    "Migrate from": [
        { label: "RevenueCat", href: "/migrate/revenuecat" },
        { label: "Purchasely", href: "/migrate/purchasely" },
        { label: "Qonversion", href: "/migrate/qonversion" },
        { label: "Superwall", href: "/migrate/superwall" },
    ],
    SDK: [
        { label: "iOS", href: "/sdk/ios" },
        { label: "Android", href: "/sdk/android" },
        { label: "React Native", href: "/sdk/react-native" },
        { label: "Flutter", href: "/sdk/flutter" },
        { label: "FlutterFlow", href: "/sdk/flutterflow" },
        { label: "Kotlin Multiplatform", href: "/sdk/kotlin-multiplatform" },
        { label: "Capacitor", href: "/sdk/capacitor" },
        { label: "Unity", href: "/sdk/unity" },
        { label: "Stripe", href: "/sdk/stripe" },
    ],
    Resources: [
        { label: "Blog", href: "/blog" },
        { label: "Ebooks", href: "/ebooks" },
        { label: "Podcast", href: "/podcast" },
        { label: "Webinars", href: "/webinars" },
        { label: "Events", href: "/events" },
        { label: "Glossary", href: "/glossary" },
        { label: "Documentation", href: "/docs" },
        { label: "Paywall library", href: "/paywall-library" },
        { label: "LTV prediction model", href: "/ltv-prediction-model" },
        { label: "Apple fiscal calendar", href: "/apple-fiscal-calendar" },
        { label: "Apple receipt checker", href: "/apple-receipt-checker" },
        { label: "Subscription calculator", href: "/subscription-calculator" },
        { label: "Refund saver calculator", href: "/refund-saver-calculator" },
        { label: "In-app subscription reports", href: "/subscription-reports" },
        { label: "Community", href: "/community" },
    ],
    Analytics: [
        { label: "Revenue analytics", href: "/revenue-analytics" },
        { label: "LTV analytics", href: "/ltv-analytics" },
        { label: "AI predictive analytics", href: "/ai-predictive-analytics" },
        { label: "Apple ads manager", href: "/apple-ads-manager" },
    ],
    Company: [
        { label: "About us", href: "/about" },
        { label: "Contact us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy policy", href: "/privacy" },
        { label: "Data protection", href: "/data-protection" },
        { label: "System status", href: "/status" },
        { label: "SOC2 compliance", href: "/soc2" },
        { label: "Become a partner", href: "/partners" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/adapaboris", label: "Twitter" },
    {
        icon: Linkedin,
        href: "https://linkedin.com/company/adapty",
        label: "LinkedIn",
    },
    { icon: DiscordIcon, href: "https://discord.gg/adapty", label: "Discord" },
    { icon: Github, href: "https://github.com/adaptyteam", label: "GitHub" },
    {
        icon: Youtube,
        href: "https://youtube.com/@adapty",
        label: "YouTube",
    },
];

function DiscordIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    );
}

function AdaptyLogo({ className }: { className?: string }) {
    return (
        <img
            src='https://adapty.io/assets/uploads/2023/12/adapty-logo-white.svg'
            alt='adapty logo'
            className={className}
        />
    );
}

export function FooterWidget() {
    return (
        <AdaptySection className="bg-a-bg-accent">
            <AdaptyContainer>
                <footer className="w-full text-white">
                    <div className="mx-auto px-6 py-12">
                        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                                Get started today or schedule a demo
                                <br />
                                for your personal onboarding
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    variant="outline"
                                    className="border-white bg-transparent px-8 py-6 text-white hover:bg-white hover:text-black"
                                >
                                    START FOR FREE
                                </Button>
                                <Button className="bg-purple-600 px-8 py-6 hover:bg-purple-700">
                                    SCHEDULE A DEMO
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-auto px-6">
                        <div className="h-px bg-gray-700" />
                    </div>

                    {/* Logo and Social Links */}
                    <div className="mx-auto px-6 py-8">
                        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                            <a href="/" className="flex items-center gap-2">
                                <AdaptyLogo className="w-[138px] h-[38px]" />
                            </a>
                            <div className="flex items-center gap-8">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-400 transition-colors text-white"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-10 w-10" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Divider */}
                    <div className="mx-auto px-6 mb-8">
                        <div className="h-px bg-gray-700" />
                    </div>

                    {/* Links Grid */}
                    <div className="mx-auto px-6 pb-12">
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                            {/* Column 1 */}
                            <div className="space-y-8">
                                <FooterLinkGroup
                                    title="Paywall management"
                                    links={footerLinks["Paywall management"]}
                                />
                                <FooterLinkGroup
                                    title="Infrastructure"
                                    links={footerLinks.Infrastructure}
                                />
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-8">
                                <FooterLinkGroup title="Roles" links={footerLinks.Roles} />
                                <FooterLinkGroup title="Stages" links={footerLinks.Stages} />
                                <FooterLinkGroup title="Cases" links={footerLinks.Cases} />
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-8">
                                <FooterLinkGroup
                                    title="Migrate from"
                                    links={footerLinks["Migrate from"]}
                                />
                                <FooterLinkGroup title="SDK" links={footerLinks.SDK} />
                            </div>

                            {/* Column 4 */}
                            <div>
                                <FooterLinkGroup
                                    title="Resources"
                                    links={footerLinks.Resources}
                                />
                            </div>

                            {/* Column 5 */}
                            <div className="space-y-8">
                                <FooterLinkGroup
                                    title="Analytics"
                                    links={footerLinks.Analytics}
                                />
                                <FooterLinkGroup title="Company" links={footerLinks.Company} />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mx-auto px-6 pb-8">
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <p className="text-sm text-gray-500">© 2025 Adapty Tech Inc.</p>
                            <Select>
                                <SelectTrigger>
                                    <span className="text-sm text-gray-500">Language: English</span>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"en"}>English</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </footer>
            </AdaptyContainer>
        </AdaptySection>
    );
};

function FooterLinkGroup({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div>
            <h3 className="mb-4 font-semibold text-white text-2xl">{title}</h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-lg text-gray-400 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}