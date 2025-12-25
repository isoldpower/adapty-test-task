import {CarouselNext, CarouselPrevious, CarouselProvider} from "@shared/ui-toolkit";
import { ThinSectionTitle } from "@entities/landing/typography";
import { CenteredGroup } from "@entities/landing/containers";
import { CarouselAutomaticSlide } from "@features/landing/testimonial-carousel";
import {
    CEOTestimonialCarousel,
    CEOTestimonialCarouselPagination,
    CEOTestimonialItem
} from "@widgets/landing/testimonials";
import { ceoTestimonials } from "../config/ceo-testimonials.ts";
import { carouselConfig } from "../config/carousel-config.ts";
import {TestimonialCarouselNext, TestimonialCarouselPrevious} from "@entities/landing/testimonials-carousel";
import {CarouselButtonHover} from "@features/landing/hover-animations";


function CEOTestimonialsSection() {
    return (
        <CarouselProvider>
            <CarouselAutomaticSlide {...carouselConfig}>
                <div className="w-full min-h-[520px]">
                    <CenteredGroup className="mx-auto gap-10 lg:gap-20" orientation="horizontal">
                        <CarouselButtonHover>
                            <CarouselPrevious>
                                <TestimonialCarouselPrevious />
                            </CarouselPrevious>
                        </CarouselButtonHover>
                        <ThinSectionTitle className='text-gray-900 mb-16'>
                            Developers from all kind of apps move to Adapty to grow their revenue
                        </ThinSectionTitle>
                        <CarouselButtonHover>
                            <CarouselNext>
                                <TestimonialCarouselNext />
                            </CarouselNext>
                        </CarouselButtonHover>
                    </CenteredGroup>
                    <CEOTestimonialCarousel
                        item={<CEOTestimonialItem />}
                        testimonials={ceoTestimonials}
                    />
                    <CEOTestimonialCarouselPagination
                        testimonials={ceoTestimonials}
                    />
                </div>
            </CarouselAutomaticSlide>
        </CarouselProvider>
    );
}

export { CEOTestimonialsSection };