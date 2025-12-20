import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";


function RootComponent() {
    return import.meta.env.DEV ? (
        <>
            <Outlet />
            <TanStackRouterDevtools initialIsOpen={false} position='bottom-left' />
        </>
    ) : null;
}

RootComponent.displayName = 'RootComponent';

export { RootComponent };
export default RootComponent;