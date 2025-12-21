import type { ComponentProps } from "react";
import { Card } from "@shared/ui-toolkit";
import { cn } from "@shared/lib/utils.ts";

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