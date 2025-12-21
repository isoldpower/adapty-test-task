import {type AnchorHTMLAttributes, useMemo} from "react";
import { cn } from "@shared/lib/utils.ts";

type FeatureType = 'for-developers' | 'for-marketers' | 'for-owners';

type RedirectToFeatureDocsProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    hrefType: FeatureType;
};

const linksMap: Record<FeatureType, string> = {
    'for-developers': './docs/for-developers',
    'for-marketers': './docs/for-marketers',
    'for-owners': './docs/for-owners',
};

function RedirectToFeatureDocs({
    children,
    className,
    hrefType,
    ...props
}: RedirectToFeatureDocsProps) {
    const redirectLink = useMemo(() => {
        return linksMap[hrefType];
    }, [hrefType]);

    return (
        <a
            href={redirectLink}
            className={cn(className, "inline-block")}
            {...props}
        >
            {children}
        </a>
    );
}

export { RedirectToFeatureDocs };
export type { FeatureType };