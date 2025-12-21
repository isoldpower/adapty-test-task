import {cn} from "@shared/lib/utils.ts";
import type {ButtonHTMLAttributes} from "react";

type ButtonVariant = 'primary' | 'secondary';

const buttonVariants: Record<ButtonVariant, string> = {
    primary: "bg-a-primary text-a-primary-foreground border-a-primary hover:bg-a-primary/90",
    secondary: "bg-transparent border-white text-white hover:bg-white/10",
}

type FooterCtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

function FooterCtaButton({
    variant = 'primary',
    children,
    className,
    ...props
}: FooterCtaButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center h-[64px] px-12 border rounded-xl text-center uppercase font-semibold text-2xl",
                buttonVariants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export { FooterCtaButton };