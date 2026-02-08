import { createStore } from "zustand";

import { deepMerge } from "@shared/lib/utilities";

import type { PreferencesStoreState, PreferencesStorePayload } from "./types.ts";


function createUserPreferencesStore(
    overrides: Partial<PreferencesStoreState> = {}
) {
    const mergedInitials: PreferencesStoreState = deepMerge({
        style: "adapty"
    }, overrides);

    return createStore<PreferencesStorePayload>((set) => ({
        ...mergedInitials,
        setStyle: (style) => {
            set((state) => ({ ...state, style }));
        },
    }));
}

export { createUserPreferencesStore };