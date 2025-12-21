import { useCallback } from "react";
import { List } from "@shared/ui-toolkit";
import { ItemsGroup } from "@entities/landing/containers";
import { DefaultHeading } from "@entities/landing/typography";
import { InTextLinkHover } from "@features/landing/hover-animations";


interface Label {
    label: string;
    href?: string
}

interface EnterpriseAdvantageProps {
    feature: {
        title: string;
        labels: Label[];
    }
}

function EnterpriseAdvantage({
    feature
}: EnterpriseAdvantageProps ) {
    const getRelatedChild = useCallback((item: Label) => {
        if (item.href) return (
            <InTextLinkHover>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline">
                    {item.label}
                </a>
            </InTextLinkHover>
        );

        return <span>{ item.label }</span>;
    }, []);

    return (
        <ItemsGroup
            orientation="vertical"
            className="gap-4 pl-12 py-6 border-l-2 border-purple-600 md:first:border-none"
        >
            <DefaultHeading heading='h3' className="font-bold text-foreground">
                {feature.title}
            </DefaultHeading>
            <List className="text-2xl text-gray-700 flex flex-col gap-4">
                {feature.labels.map((item) => getRelatedChild(item))}
            </List>
        </ItemsGroup>
    );
}

export { EnterpriseAdvantage };