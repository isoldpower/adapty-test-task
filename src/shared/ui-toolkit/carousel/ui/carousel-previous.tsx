import { cloneElement, useCallback } from "react";
import { useCarouselContext } from "@shared/ui-toolkit";
import type { ReactElement } from "react";


interface CarouselPreviousProps {
    children: ReactElement<{ onClick?: () => void }>;
}

function CarouselPrevious({
    children
}: CarouselPreviousProps) {
    const { currentIndex, maxSize, goToSlide } = useCarouselContext();

    const handleClick = useCallback(() => {
        const newIndex = currentIndex === 0 ? maxSize - 1 : currentIndex - 1;

        goToSlide(newIndex);
    }, [currentIndex, goToSlide, maxSize]);

    return cloneElement(children, {
        ...children.props,
        onClick: handleClick
    });
}

export { CarouselPrevious };
export type { CarouselPreviousProps };