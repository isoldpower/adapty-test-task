import {cloneElement, useCallback} from "react";
import type { ReactElement } from "react";
import {useCarouselContext} from "@shared/ui-toolkit";


interface CarouselNextProps {
    children: ReactElement<{ onClick?: () => void }>;
}

function CarouselNext({
    children
}: CarouselNextProps) {
    const { currentIndex, maxSize, goToSlide } = useCarouselContext();

    const handleClick = useCallback(() => {
        const newIndex = currentIndex === maxSize - 1 ? 0 : currentIndex + 1;

        goToSlide(newIndex);
    }, [currentIndex, goToSlide, maxSize]);

    return cloneElement(children, {
        ...children.props,
        onClick: handleClick
    });
}

export { CarouselNext };
export type { CarouselNextProps };