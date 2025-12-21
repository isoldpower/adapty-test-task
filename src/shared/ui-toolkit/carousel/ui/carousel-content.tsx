import { Children, useEffect } from "react";
import { useCarouselContext } from "@shared/ui-toolkit";

import type { ReactNode } from "react";


interface CarouselContentProps {
    children: ReactNode;
}

function CarouselContent({
    children
}: CarouselContentProps) {
    const { setMaxSize } = useCarouselContext();

    useEffect(() => {
        const size = Children.count(children);

        setMaxSize(size);
    }, [children, setMaxSize]);

    return children;
}

export { CarouselContent };
export type { CarouselContentProps };