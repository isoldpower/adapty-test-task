import { cn } from "@shared/lib/utilities";
import { Container } from "@shared/ui-toolkit";

import type { ReactNode } from "react";


interface AttioContainerProps {
    children: ReactNode
    className?: string
}

function AttioContainer({
    children,
    className,
    ...props
}: AttioContainerProps) {
    return (
        <Container className={cn("max-w-full w-[1100px] flex flex-col mx-auto items-start", className)} {...props}>
            {children}
        </Container>
    );
};

export { AttioContainer };
export type { AttioContainerProps };