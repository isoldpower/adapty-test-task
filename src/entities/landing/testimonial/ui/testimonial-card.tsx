import {cn} from "@shared/lib/utils.ts";

interface TestimonialCardProps {
    companyImg: string
    companyTitle?: string
    companyDescription?: string
    quote: string
    author: string
    role: string
    avatar: string
    negative?: boolean
}

export function TestimonialCard({
    quote,
    author,
    role,
    avatar,
    companyImg,
    companyDescription,
    companyTitle,
    negative = false
}: TestimonialCardProps) {
    return (
        <div className="border border-neutral-700 rounded-2xl p-4 lg:p-10 relative">
            <svg
                className={cn(
                    "lg:w-12 lg:h-12 w-8 h-8 text-neutral-100p-2 mb-6 absolute lg:-top-5 -top-4 z-10",
                    negative ? "bg-a-bg-accent" : "bg-a-bg-website"
                )}
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
            <div className='flex lg:gap-6 items-center mb-3 lg:mb-6'>
                <img
                    src={companyImg}
                    alt="Company logo"
                    height={58}
                    width={220}
                    className="max-h-[20px] lg:max-h-[40px] object-contain w-auto"
                />
                {companyTitle || companyDescription ? (
                    <div className='flex flex-col gap-2'>
                        {companyTitle ? (
                            <p className='text-lg font-medium'>{companyTitle}</p>
                        ) : null}
                        {companyDescription ? (
                            <p className='text-gray-400 text-lg'>{companyDescription}</p>
                        ) : null}
                    </div>
                ) : null}
            </div>
            <p className="text-lg lg:text-2xl leading-normal lg:leading-relaxed mb-3 lg:mb-6">"{quote}"</p>
            <div className="flex items-center gap-2 lg:gap-4">
                <img
                    src={avatar}
                    alt={author}
                    className="h-[26px] lg:h-[40px] w-[26px] lg:w-[40px] rounded-full object-cover"
                />
                <div>
                    <p className="text-lg lg:text-2xl font-medium">{author}</p>
                    <p className="text-gray-400 text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
}
