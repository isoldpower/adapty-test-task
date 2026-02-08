import { useMemo, createContext } from "react";

import { createUserPreferencesStore } from "./zustand-store.ts";

import type { UserPreferencesContextPayload, PreferencesStoreState } from "./types.ts";
import type { PropsWithChildren } from "react";


const UserPreferencesContext = createContext<UserPreferencesContextPayload | null>(null);

type UserPreferencesProviderProps = PropsWithChildren<{
    initialValues?: Partial<PreferencesStoreState>;
}>;

function UserPreferencesProvider({
    initialValues,
    children
}: UserPreferencesProviderProps) {
    const zustandStore = useMemo(() => {
        return createUserPreferencesStore(initialValues);
    }, [initialValues]);

    return (
        <UserPreferencesContext.Provider value={zustandStore}>
            {children}
        </UserPreferencesContext.Provider>
    );
}

export { UserPreferencesContext, UserPreferencesProvider };