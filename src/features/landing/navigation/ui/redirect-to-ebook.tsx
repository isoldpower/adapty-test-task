import { cn } from "@shared/lib/utilities";

import type { AnchorHTMLAttributes } from "react";

type RedirectToEbookProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function RedirectToEbook({
    children,
    className,
    ...props
}: RedirectToEbookProps) {
    return (
        <a
            href="./ebook"
            className={cn(className, "inline-block")}
            {...props}
        >
            {children}
        </a>
    );
}

export { RedirectToEbook };