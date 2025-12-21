import { useCallback, useState } from "react";
import { Button } from "@shared/ui-toolkit/button";
import { ArrowRight } from "lucide-react"
import { cn } from "@shared/lib/utils.ts";

import type { ComponentProps, FormHTMLAttributes } from "react";


type EmailCaptureFormProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
    buttonProps?: Omit<ComponentProps<typeof Button>, 'type'>;
};

function EmailCaptureForm({
    children,
    className,
    buttonProps: {
        children: buttonChildren = "Start for free",
        className: buttonClassName,
        ...buttonProps
    } = {},
    ...props
}: EmailCaptureFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement);

        console.log("[Adapty] Form submitted:", Object.fromEntries(formData.entries()));
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000)
    }, []);

    return (
        <form
            onSubmit={handleSubmit}
            className={cn("flex items-stretch relative flex-grow w-[330px]", className)}
            {...props}
        >
            {children}
            <Button
                type="submit"
                size="lg"
                className={cn(
                    buttonClassName,
                    "absolute h-[calc(52px-1rem)] right-2 top-2 gap-2 text-2xl whitespace-nowrap"
                )}
                {...buttonProps}
            >
                {isSubmitted ? "Success!" : buttonChildren}
                {!isSubmitted && <ArrowRight className="h-4 w-4"/>}
            </Button>
        </form>
    );
}

export { EmailCaptureForm };
export { type EmailCaptureFormProps };
