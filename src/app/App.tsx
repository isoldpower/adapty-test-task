import { Suspense } from "react";
import { createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routes/routeTree.gen.ts";

const hashHistory = createHashHistory();
const router = createRouter({
    routeTree,
    basepath: "/adapty-test-task",
    history: hashHistory
});

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export { App };