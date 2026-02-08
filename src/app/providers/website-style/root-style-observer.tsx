import { useEffect, useEffectEvent } from "react";

import { websiteStyleVariants } from "../user-preferences";
import { useUserPreferences } from "../user-preferences";

import type { WebsiteStyleVariant } from "../user-preferences";
import type { PropsWithChildren } from "react";


interface StyleChangeOptions {
    from: WebsiteStyleVariant;
    to: WebsiteStyleVariant;
}

interface StyleChangeEffect {
    beforeRender: (opts: StyleChangeOptions) => void;
    afterRender: (opts: StyleChangeOptions) => void;
    beforeDispose: (opts: StyleChangeOptions) => void;
}

type RootStyleObserverProps = PropsWithChildren<{
    effects?: Partial<Record<WebsiteStyleVariant, Partial<StyleChangeEffect>>>;
}>;

function RootStyleObserver({
    effects = {},
    children
}: RootStyleObserverProps) {
    const currentStyle = useUserPreferences((state) => state.style);
    const setStyle = useUserPreferences((state) => state.setStyle);

    const onRootChange = useEffectEvent(() => {
        const root = document.documentElement;
        const newStyle = websiteStyleVariants
            .find((styleVariant) => root.classList.contains(styleVariant));

        if (newStyle && newStyle !== currentStyle) {
            const options: StyleChangeOptions = { from: currentStyle, to: newStyle };

            effects[currentStyle]?.beforeDispose?.(options);
            effects[newStyle]?.beforeRender?.(options);
            setStyle(newStyle);
        }
    });

    useEffect(() => {
        const mutationObserver = new MutationObserver(onRootChange);
        mutationObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });
        
        return () => {
            mutationObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const options: StyleChangeOptions = { from: currentStyle, to: currentStyle };

        effects[currentStyle]?.afterRender?.(options);
    }, [currentStyle, effects]);
    
    return children;
}

export { RootStyleObserver };