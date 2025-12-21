import { CarouselContext } from "@shared/ui-toolkit";
import { useCallback, useMemo, useState } from "react";


interface CarouselProviderProps {
    children: React.ReactNode;
}

function CarouselProvider({
    children
}: CarouselProviderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [maxSize, setMaxSize] = useState<number>(0);

    const goToSlideCallback = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);
    const setMaxSizeCallback = useCallback((size: number) => {
        setMaxSize(size);
    }, []);

    const contextValue = useMemo(() => ({
        currentIndex,
        maxSize,
        goToSlide: goToSlideCallback,
        setMaxSize: setMaxSizeCallback,
    }), [currentIndex, goToSlideCallback, setMaxSizeCallback, maxSize]);

    return (
        <CarouselContext.Provider value={contextValue}>
            {children}
        </CarouselContext.Provider>
    );
}

export { CarouselProvider };
export type { CarouselProviderProps };