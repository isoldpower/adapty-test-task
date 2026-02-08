import { UserPreferencesProvider } from "./user-preferences";
import { RootStyleObserver } from "./website-style";

import type { PropsWithChildren } from "react";


function WebsiteProviders({
    children
}: PropsWithChildren<object>) {
    return (
        <UserPreferencesProvider>
            <RootStyleObserver>
                {children}
            </RootStyleObserver>
        </UserPreferencesProvider>
    );
}

export { WebsiteProviders };