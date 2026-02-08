import { cn } from "@shared/lib/utilities";
import { Card } from "@shared/ui-toolkit";

import type { ComponentProps } from "react";

type LevitatingPaperProps = ComponentProps<typeof Card>;

function LevitatingPaper({
    children,
    className,
    ...props
}: LevitatingPaperProps) {
    return (
        <Card className={cn("border-2 p-4 overflow-hidden", className)} {...props}>
            {children}
        </Card>
    );
}

export { LevitatingPaper };