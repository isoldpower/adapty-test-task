import type { websiteStyleVariants } from "./config";
import type { StoreApi } from "zustand";


type WebsiteStyleVariant = typeof websiteStyleVariants[number];

interface PreferencesStoreState {
    style: WebsiteStyleVariant;
}

interface PreferencesStorePayload extends PreferencesStoreState {
    setStyle: (style: WebsiteStyleVariant) => void;
}

type UserPreferencesContextPayload = StoreApi<PreferencesStorePayload>;

export type { PreferencesStoreState, PreferencesStorePayload };
export type { WebsiteStyleVariant, UserPreferencesContextPayload };