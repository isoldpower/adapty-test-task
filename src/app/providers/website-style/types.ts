import type { WebsiteStyleVariant } from "../user-preferences";

interface StyleSplitterState {
    readonly previousStyle: WebsiteStyleVariant | null;
    readonly activeStyle: WebsiteStyleVariant;
}

interface StyleVariantEffectOptions {
    readonly from: WebsiteStyleVariant | null;
    readonly to: WebsiteStyleVariant | null;
}

interface StyleVariantEffect {
    readonly beforeUnmount?: (opts: StyleVariantEffectOptions) => void
    readonly afterUnmount?: (opts: StyleVariantEffectOptions) => void
    readonly beforeRender?: (opts: StyleVariantEffectOptions) => void
    readonly afterRender?: (opts: StyleVariantEffectOptions) => void
}

type StyleSplitterPayload = StyleSplitterState

export type { StyleSplitterState, StyleSplitterPayload, StyleVariantEffect };