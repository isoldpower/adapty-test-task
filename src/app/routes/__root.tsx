import { createRootRoute, HeadContent, Scripts, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { PropsWithChildren } from "react";
import mainCss from '@app/style/globals.css?url'

export const Route = createRootRoute({
    component: RootLayout,
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { title: 'The Best Solution to Grow Mobile In-App Purchases | Adapty' },
        ],
        links: [
            { rel: 'preload', href: mainCss, as: 'style' },
            { rel: 'stylesheet', href: mainCss },
        ]
    })
});

function RootLayout () {
    return (
        <RootDocument>
            <main className="min-h-screen">
                <Outlet />
            </main>
            {import.meta.env.DEV ? (
                <TanStackRouterDevtools initialIsOpen={false} position='bottom-left'/>
            ) : null}
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<PropsWithChildren<object>>) {
    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body>
                {children}
                <Scripts />
            </body>
        </html>
    );
}