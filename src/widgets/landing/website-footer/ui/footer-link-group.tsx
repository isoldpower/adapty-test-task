import {List} from "@shared/ui-toolkit";

interface FooterLinksSection {
    title: string;
    links: { label: string; href: string }[];
}

interface FooterLinkGroupProps {
    section: FooterLinksSection;
}

function FooterLinkGroup({
    section
}: FooterLinkGroupProps) {
    return (
        <div>
            <h4 className="mb-4 font-semibold">
                {section.title}
            </h4>
            <List className="space-y-2">
                {section.links.map((link) => (
                    <a key={link.href} href={link.href} className="text-base sm:text-lg transition-colors opacity-80 hover:opacity-60">
                        {link.label}
                    </a>
                ))}
            </List>
        </div>
    );
}

export { FooterLinkGroup };