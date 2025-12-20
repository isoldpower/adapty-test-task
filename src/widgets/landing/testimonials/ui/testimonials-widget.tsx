import { TestimonialCarousel } from "@features/landing/testimonial-carousel"
import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";

const CEO_TESTIMONIALS = [
    {
        quote: "Migrating off RevenueCat was not an easy decision for us. We’ve chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
        author: "Cem Ortabas",
        role: "Co-founder and CEO, HubX",
        logoSrc: "https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg",
        avatar: {
            src: "https://adapty.io/assets/uploads/2023/12/photo-Cem-Ortabas.webp",
            height: 800,
            width: 600,
        }
    },
    {
        quote: "We’ve been working with Adapty since 2021 and I couldn’t be happier about it. We’ve tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.",
        author: "Chris Bick",
        role: "Founder and CEO, Bickster",
        logoSrc: "https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg",
        avatar: {
            src: "https://adapty.io/assets/uploads/2023/12/photo-Chris-Bick.webp",
            height: 800,
            width: 600,
        }
    },
    {
        quote: "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.",
        author: "Yalçın Özdemir",
        role: "Founder & CEO, AppNation",
        logoSrc: "https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg",
        avatar: {
            src: "https://adapty.io/assets/uploads/2024/02/Asman.webp",
            height: 800,
            width: 600,
        }
    },
    {
        quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel",
        author: "Kyle Smith",
        role: "Head of data at Smitten Dating",
        logoSrc: "https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp",
        avatar: {
            src: "https://adapty.io/assets/uploads/2024/02/Kyle2.webp",
            height: 800,
            width: 600,
        }
    },
    {
        quote: "We’ve tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We’ve tested them all: products, title text, CTA buttons, images, videos etc. With Adapty’s A/B testing, we managed to double our monthly revenue. I wasn’t sure if one instrument could make such an impact, but I witnessed it myself.",
        author: "Roi Mulia",
        role: "Founder & CEO, SocialKit",
        logoSrc: "https://adapty.io/assets/uploads/2024/02/logo-social-white.svg",
        avatar: {
            src: "https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp",
            height: 800,
            width: 600,
        }
    }
]

export function TestimonialsWidget() {
    return (
        <AdaptySection className="bg-a-bg-accent">
            <AdaptyContainer>
                <div className="w-full text-center">
                    <h2 className="text-accent-foreground flex flex-col items-center mb-4 font-normal tracking-tight text-balance">
                        Developers from all kind of apps move to Adapty to grow their revenue
                    </h2>
                </div>
                <hr className='accent-a-white w-full opacity-10 my-15'/>
                <TestimonialCarousel testimonials={CEO_TESTIMONIALS}/>
            </AdaptyContainer>
        </AdaptySection>
    );
}
