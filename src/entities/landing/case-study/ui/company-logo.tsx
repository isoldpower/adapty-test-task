import { cn } from "@shared/lib/utils.ts";
import type { ImgHTMLAttributes } from "react";

type CompanyLogoProps = ImgHTMLAttributes<HTMLImageElement>;

function CompanyLogo({
    className,
    ...props
}: CompanyLogoProps) {
    return (
        <img className={cn("w-[48px] h-[48px] rounded-xl object-cover", className)} {...props} />
    );
}

export { CompanyLogo };
export type { CompanyLogoProps };