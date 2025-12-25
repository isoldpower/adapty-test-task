import { useBreakpointsMapping } from "@shared/lib";
import { FooterNavGrid, InlineGroup, ItemsGroup } from "@entities/landing/containers";
import { FooterDivider } from "@entities/landing/website-footer";
import {
    FooterHeadingWidget,
    FooterLanguageSelect,
    FooterLinkGroup,
    FooterSocialsWidget
} from "@widgets/landing/website-footer";
import { footerLinks } from "../config/footer-links.ts";
import { languageList } from "../config/language-list.tsx";
import { MutedLabel } from "@entities/landing/typography";


function FooterSection() {
    const maxNavColumns = useBreakpointsMapping({
        default: 1,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        '2xl': 5
    });

    return (
        <footer className="w-full text-accent-foreground">
            <ItemsGroup>
                <FooterHeadingWidget />
                <FooterDivider orientation='backward' />
                <FooterSocialsWidget />
                <FooterDivider orientation='direct' />
                <FooterNavGrid
                    maxColumns={maxNavColumns}
                    className="w-full text-accent-foreground"
                >
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <FooterLinkGroup section={{ title, links }} key={title} />
                    ))}
                </FooterNavGrid>
                <InlineGroup breakpoint='all' className="gap-x-6 gap-y-2 flex-wrap w-full justify-between mt-10">
                    <MutedLabel>
                        © 2025 Adapty Tech Inc.
                    </MutedLabel>
                    <FooterLanguageSelect
                        languages={languageList}
                        defaultLanguageCode='en'
                    />
                </InlineGroup>
            </ItemsGroup>
        </footer>
    );
}

export { FooterSection };