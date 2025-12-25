import { createRouter } from '@tanstack/react-router'
import { routeTree } from '@app/routes/routeTree.gen.ts'
import { DefaultNotFoundBoundary, DefaultCatchBoundary } from "@app/default-fx";

export function getRouter() {
    return createRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreload: 'intent',
        defaultErrorComponent: DefaultCatchBoundary,
        defaultNotFoundComponent: DefaultNotFoundBoundary
    });
}