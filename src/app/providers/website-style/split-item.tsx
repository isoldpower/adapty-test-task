import { useEffect, useState } from "react";

import { useStyleSplitter } from "./hooks.ts";

import type { StyleVariantEffect } from "./types.ts";
import type { PropsWithChildren } from "react";


type StyleSplitterItemProps = PropsWithChildren<{
    styleName: string;
    effects?: StyleVariantEffect
}>;

function StyleSplitterItem({
    children,
    effects = {},
    styleName
}: StyleSplitterItemProps) {
    const [display, setDisplay] = useState(false);
    const { activeStyle, previousStyle } = useStyleSplitter();

    useEffect(() => {
        if (activeStyle === styleName && !display) {
            effects.beforeRender?.({ from: activeStyle, to: styleName });
            setDisplay(true);
        } else if (previousStyle === styleName && display) {
            effects.beforeUnmount?.({ from: previousStyle, to: activeStyle });
            setDisplay(false);
        }
    }, [activeStyle, styleName, effects, previousStyle, display]);


    return display ? children : null;
}

export { StyleSplitterItem };