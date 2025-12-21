import type { AnchorHTMLAttributes } from "react";

type ExternalNavigationProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>;

function ExternalNavigation({
    children,
    href,
    ...props
}: ExternalNavigationProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

export { ExternalNavigation };
export type { ExternalNavigationProps };