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
            <h4 className="mb-4 font-semibold text-white">
                {section.title}
            </h4>
            <List className="space-y-2">
                {section.links.map((link) => (
                    <a href={link.href} className="text-lg text-gray-400 transition-colors hover:text-white">
                        {link.label}
                    </a>
                ))}
            </List>
        </div>
    );
}

export { FooterLinkGroup };