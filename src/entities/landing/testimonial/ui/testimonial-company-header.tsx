import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";


type TestimonialCompanyHeaderProps = BaseHTMLAttributes<HTMLDivElement> & {
    companyTitle?: string;
    companyDescription?: string;
};

function TestimonialCompanyHeader({
    className,
    companyTitle,
    companyDescription,
    ...props
}: TestimonialCompanyHeaderProps) {
    return (companyTitle || companyDescription) ? (
        <div className={cn("flex flex-col", className)} {...props}>
            {companyTitle ? <p className='text-lg font-medium'>{companyTitle}</p> : null}
            {companyDescription ? <p className='text-gray-400 text-lg'>{companyDescription}</p> : null}
        </div>
    ) : null;
}

export { TestimonialCompanyHeader };