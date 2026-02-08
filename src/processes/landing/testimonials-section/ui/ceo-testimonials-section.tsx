import { CenteredGroup } from "@entities/landing/containers";
import { ThinSectionTitle } from "@entities/landing/typography";
import { CarouselAutomaticSlide } from "@features/landing/testimonial-carousel";
import { CarouselProvider } from "@shared/ui-toolkit";
import {
    CEOTestimonialCarousel,
    CEOTestimonialCarouselPagination,
    CEOTestimonialItem
} from "@widgets/landing/testimonials";

import { carouselConfig } from "../config/carousel-config.ts";
import { ceoTestimonials } from "../config/ceo-testimonials.ts";


function CEOTestimonialsSection() {
    return (
        <>
            <ThinSectionTitle className='text-accent-foreground mb-4'>
                Developers from all kind of apps move to Adapty to grow their revenue
            </ThinSectionTitle>
            <hr className='accent-a-white w-full opacity-10 my-15' />
            <CarouselProvider>
                <CarouselAutomaticSlide {...carouselConfig}>
                    <div className="w-full min-h-[520px]">
                        <CenteredGroup className="mx-auto gap-10 lg:gap-20">
                            <CEOTestimonialCarousel
                                item={<CEOTestimonialItem />}
                                testimonials={ceoTestimonials}
                            />
                            <CEOTestimonialCarouselPagination
                                testimonials={ceoTestimonials}
                            />
                        </CenteredGroup>
                    </div>
                </CarouselAutomaticSlide>
            </CarouselProvider>
        </>
    );
}

export { CEOTestimonialsSection };