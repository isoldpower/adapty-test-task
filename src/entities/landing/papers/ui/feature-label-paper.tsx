import type { ComponentProps } from "react";
import { Card } from "@shared/ui-toolkit";
import { cn } from "@shared/lib/utils.ts";

type FeatureLabelPaperProps = ComponentProps<typeof Card>;

function FeatureLabelPaper({
    children,
    className,
    ...props
}: FeatureLabelPaperProps) {
    return (
        <Card className={cn("rounded-full bg-a-bg-website shadow-none border-none shadow-xs", className)} {...props}>
            {children}
        </Card>
    );
}

export { FeatureLabelPaper };