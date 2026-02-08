import { InlineGroup } from "@entities/landing/containers";
import {
    AdaptyIcon,
    DiscordIcon,
    GithubIcon,
    IconContainer,
    LinkedInIcon,
    XIcon,
    YoutubeIcon
} from "@entities/landing/website-footer";

const socialsIcons = [
    { Icon: XIcon, key: "x" },
    { Icon: LinkedInIcon, key: "linkedin" },
    { Icon: DiscordIcon, key: "discord" },
    { Icon: GithubIcon, key: "github" },
    { Icon: YoutubeIcon, key: "youtube" },
];

function FooterSocialsWidget() {
    return (
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <AdaptyIcon />
            <InlineGroup breakpoint='all'>
                {socialsIcons.map(({ key, Icon }) => (
                    <IconContainer key={key}>
                        <Icon />
                    </IconContainer>
                ))}
            </InlineGroup>
        </div>
    );
}

export { FooterSocialsWidget };