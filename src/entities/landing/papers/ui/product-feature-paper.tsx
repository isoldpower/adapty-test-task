import { cn } from "@shared/lib/utilities";
import { Card } from "@shared/ui-toolkit";

import type { ComponentProps } from "react";

type ProductFeaturePaperProps = ComponentProps<typeof Card>;

function ProductFeaturePaper({
    children,
    className,
    ...props
}: ProductFeaturePaperProps) {
    return (
        <Card className={cn("bg-a-bg-cold border-none shadow-none", className)} {...props}>
            {children}
        </Card>
    );
}

export { ProductFeaturePaper };