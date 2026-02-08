import { createRootRoute } from "@tanstack/react-router";

import mainCss from "@app/style/globals.css?url";
import shadcnCss from "@app/style/shadcn.css?url";

import { RootLayout } from "../root-layout.tsx";


export const Route = createRootRoute({
    component: RootLayout,
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "The Best Solution to Grow Mobile In-App Purchases | Adapty" },
        ],
        links: [
            { rel: "preload", href: shadcnCss, as: "style" },
            { rel: "stylesheet", href: shadcnCss },
            { rel: "preload", href: mainCss, as: "style" },
            { rel: "stylesheet", href: mainCss },
        ]
    })
});