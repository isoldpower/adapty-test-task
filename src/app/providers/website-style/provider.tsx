import { createContext, useEffect, useState } from "react";


import { useUserPreferences } from "../user-preferences";

import type { StyleSplitterPayload } from "./types.ts";
import type { ReactNode } from "react";


const StyleSplitterContext = createContext<StyleSplitterPayload | null>(null);

interface StyleSplitterProviderProps {
    readonly children: ReactNode;
}

function StyleSplitterProvider({
    children
}: StyleSplitterProviderProps) {
    const style = useUserPreferences((state) => state.style);
    const [contextValue, setContextValue] = useState<StyleSplitterPayload>({
        activeStyle: style,
        previousStyle: null
    });

    useEffect(() => {
        setContextValue((previous) => ({
            previousStyle: previous.activeStyle,
            activeStyle: style,
        }));
    }, [style]);

    return (
        <StyleSplitterContext.Provider value={contextValue}>
            {children}
        </StyleSplitterContext.Provider>
    );
}

export { StyleSplitterContext, StyleSplitterProvider };