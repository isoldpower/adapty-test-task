import { useContext } from "react";
import { useStore } from "zustand";

import { UserPreferencesContext } from "./provider.tsx";

import type { PreferencesStorePayload } from "./types.ts";



function useUserPreferences<T>(selector: (state: PreferencesStorePayload) => T) {
    const context = useContext(UserPreferencesContext);

    if (!context) {
        throw new Error("useUserPreferences must be used within a WebsiteStyleProvider");
    }

    return useStore(context, selector);
}

export { useUserPreferences };