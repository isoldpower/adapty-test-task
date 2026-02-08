import { useContext } from "react";

import { StyleSplitterContext } from "./provider.tsx";

import type { StyleSplitterPayload } from "./types.ts";


function useStyleSplitter() {
  const context = useContext<StyleSplitterPayload | null>(StyleSplitterContext);
  
  if (!context) {
    throw new Error("useStyleSplitter must be used within a StyleSplitterProvider");
  }
  
  return context;
}

export { useStyleSplitter };