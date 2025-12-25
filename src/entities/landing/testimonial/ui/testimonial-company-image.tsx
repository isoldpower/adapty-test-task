import type {ImgHTMLAttributes} from "react";
import {cn} from "@shared/lib/utils.ts";

type TestimonialCompanyImageProps = ImgHTMLAttributes<HTMLImageElement>;

function TestimonialCompanyImage({
    src,
    className,
    ...props
}: TestimonialCompanyImageProps) {
    return (
        <img
            src={src}
            alt="Company logo"
            height={58}
            width={220}
            className={cn("max-h-[32px] lg:max-h-[40px] object-contain w-auto", className)}
            {...props}
        />
    );
}

export { TestimonialCompanyImage };