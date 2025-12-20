import { Suspense } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routes/routeTree.gen.ts";

const router = createRouter({ routeTree });

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export { App };