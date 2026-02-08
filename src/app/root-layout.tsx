import { HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { WebsiteProviders } from "@app/providers";
import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { RootContainer } from "@entities/landing/containers";
import { FooterSection } from "@processes/landing/footer-section";

import type { PropsWithChildren } from "react";
import {Switch} from "@shared/ui-toolkit/@shadcn/ui/switch.tsx";
import {CenteredGroup} from "@entities/landing/groups";


function RootDocument({ children }: Readonly<PropsWithChildren<object>>) {
    return (
        <html>
        <head>
            <title>Adapty.io</title>
            <HeadContent />
        </head>
        <body>
            {children}
            <Scripts />
        </body>
        </html>
    );
}

function RootLayout () {
    return (
        <RootDocument>
            <WebsiteProviders>
                <div className="flex flex-row justify-between px-8 py-4 border-b border-gray-200">
                    <div>Adapty Logo</div>
                    <CenteredGroup orientation='horizontal' className="w-auto gap-4">
                        <div>Art design</div>
                        <Switch />
                    </CenteredGroup>
                </div>
                <RootContainer>
                    <Outlet />
                </RootContainer>
                <AdaptySection variant='accent' className='pb-12!'>
                    <AdaptyContainer>
                        <FooterSection />
                    </AdaptyContainer>
                </AdaptySection>
            </WebsiteProviders>
            {import.meta.env.DEV ? (
                <TanStackRouterDevtools initialIsOpen={false} position='bottom-left'/>
            ) : null}
        </RootDocument>
    );
}

export { RootLayout };