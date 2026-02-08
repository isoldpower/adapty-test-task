import { cn } from "@shared/lib/utilities";

import type { ImgHTMLAttributes } from "react";


type AuthorImage = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
    avatar: string;
};

function AuthorImage({
    className,
    avatar,
    ...props
}: AuthorImage) {
    return (
        <img
            src={avatar}
            alt="Author portrait image"
            className={cn(
                "h-[26px] w-[26px] rounded-full object-cover",
                "lg:h-[40px] lg:w-[40px]",
                className
            )}
            {...props}
        />
    );
}

export { AuthorImage };