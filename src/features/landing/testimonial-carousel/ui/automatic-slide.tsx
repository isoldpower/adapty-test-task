import { useCarouselContext } from "@shared/ui-toolkit";
import { useCallback, useEffect } from "react";

import type { PropsWithChildren } from "react";


type CarouselAutomaticSlideProps = PropsWithChildren<{
    timeout: number;
    backward?: boolean;
}>;

function CarouselAutomaticSlide({
    timeout,
    backward = false,
    children
}: CarouselAutomaticSlideProps) {
    const { currentIndex, maxSize, goToSlide } = useCarouselContext();

    const handleTimerTrigger = useCallback(() => {
        let nextIndex = backward ? currentIndex - 1 : currentIndex + 1;

        if (nextIndex < 0) {
            nextIndex = maxSize - 1;
        } else if (nextIndex >= maxSize) {
            nextIndex = 0;
        }

        goToSlide(nextIndex);
    }, [backward, currentIndex, maxSize, goToSlide]);

    useEffect(() => {
        const timer = setTimeout(handleTimerTrigger, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [handleTimerTrigger, timeout]);

    return children;
}

export { CarouselAutomaticSlide };
export type { CarouselAutomaticSlideProps };