import { ThinSectionTitle } from "@entities/landing/typography";
import { SdkPlate } from "@widgets/landing/sdk-integration";
import { sdkPlatformsList } from "../config/sdk-platforms-list.ts";
import { CenteredGroup } from "@entities/landing/containers";


function SDKPlatformsList() {
    return (
        <CenteredGroup className='gap-8'>
            <ThinSectionTitle className="text-accent-foreground">
                Get the SDK for your platform
            </ThinSectionTitle>
            <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full">
                {sdkPlatformsList.map((platform) => (
                    <SdkPlate
                        key={platform.title}
                        title={platform.title}
                        iconSrc={platform.iconSrc}
                        href={platform.href}
                        backgroundSrc={platform.backgroundSrc}
                    />
                ))}
            </div>
        </CenteredGroup>
    );
}

export { SDKPlatformsList };