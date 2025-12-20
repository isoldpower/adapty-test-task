import { useCallback, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {ResponsivePicture} from "@entities/landing/responsive-picture";
import {cn} from "@shared/lib/utils.ts";

interface Testimonial {
    quote: string
    author: string
    role: string
    logoSrc: string
    avatar: {
        src: string
        height: number
        width: number
    }
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    }, [testimonials.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    }, [testimonials.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full min-h-[520px]">
            <div className="mx-auto">
                <div className="flex items-center gap-4 lg:gap-20">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-14 h-14 lg:w-20 lg:h-20" strokeWidth={3}/>
                    </button>

                    {testimonials.map((testimonial, index) => (
                        <div className={cn(
                            "flex flex-col md:flex-row items-center gap-8 lg:gap-12 flex-1 ease-linear",
                            index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute pointer-events-none"
                        )} key={index}>
                            <div className="flex-shrink-0 w-full md:w-[300px] max-w-[480px] max-h-full">
                                <ResponsivePicture
                                    sources={[
                                        { srcSet: testimonial.avatar.src, type: 'image/webp' },
                                    ]}
                                    src={testimonial.avatar.src}
                                    alt={testimonial.author + "'s avatar"}
                                    width={testimonial.avatar.width}
                                    height={testimonial.avatar.height}
                                    className="rounded-lg object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-start gap-8 w-full md:w-[calc(100%-300px)]">
                                <p className="text-white text-[1.6rem] lg:text-2xl leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <p className="text-white text-[1.6rem] lg:text-3xl font-semibold">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-gray-400">{testimonial.role}</p>
                                </div>
                                <img
                                    src={testimonial.logoSrc}
                                    alt="Company logo"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-14 h-14 lg:w-20 lg:h-20" strokeWidth={3}/>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => { goToSlide(index); }}
                            aria-label={`Go to testimonial ${(index + 1).toString()}`}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex
                                    ? "bg-white"
                                    : "bg-gray-600 hover:bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
