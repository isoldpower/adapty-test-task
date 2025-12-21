interface CarouselContextPayload {
    currentIndex: number;
    goToSlide: (index: number) => void;
    setMaxSize: (size: number) => void;
    maxSize: number;
}

export type { CarouselContextPayload };