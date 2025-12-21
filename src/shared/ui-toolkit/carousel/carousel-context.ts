import { createContext, useContext } from "react";
import type { CarouselContextPayload } from "./types.ts";

const stomp = () => {
    throw new Error("Function must be overridden in CarouselContextProvider");
}

const CarouselContext = createContext<CarouselContextPayload>({
    currentIndex: 0,
    maxSize: 0,
    setMaxSize: stomp,
    goToSlide: stomp,
});

const useCarouselContext = () => {
    const context = useContext(CarouselContext);

    return context;
};

export { CarouselContext, useCarouselContext };