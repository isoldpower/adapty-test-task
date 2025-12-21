import { ArrowRight } from "lucide-react";
import type {PropsWithChildren} from "react";

type ProductBenefitTextProps = PropsWithChildren<{
    title: string
    description: string
    cta: string
    href: string
}>;

function ProductBenefitText({
    title,
    description,
    cta,
    href,
    children
}: ProductBenefitTextProps) {
    return (
        <div className='flex flex-col gap-4'>
            <h2 className="flex flex-col text-3xl lg:mb-4 font-normal tracking-tight text-balance">
                {title}
            </h2>
            <p className='text-lg lg:text-2xl leading-relaxed'>
                {description}
            </p>
            <a className='flex gap-4 items-center text-2xl lg:text-2xl mb-6 font-bold' href={href}>
                <span>{cta}</span>
                <ArrowRight className="h-6 w-6" />
            </a>
            {children}
        </div>
    );
}

export { ProductBenefitText };