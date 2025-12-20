interface TestimonialCardProps {
    companyImg: string
    quote: string
    author: string
    role: string
    avatar: string
}

export function TestimonialCard({ quote, author, role, avatar, companyImg }: TestimonialCardProps) {
    return (
        <div className="border border-neutral-700 rounded-2xl p-10 relative">
            <svg
                className="w-12 h-12 text-neutral-100 bg-[rgb(25,25,25)] p-2 mb-6 absolute -top-5 z-10"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path
                    d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
            <img src={companyImg} alt="Company logo" height={58} width={220} className="mb-6 max-h-[40px] object-contain w-auto"/>
            <p className="text-white text-2xl leading-relaxed mb-6">"{quote}"</p>
            <div className="flex items-center gap-4">
                <img
                    src={avatar}
                    alt={author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="text-white text-2xl font-medium">{author}</p>
                    <p className="text-gray-400 text-lg">{role}</p>
                </div>
            </div>
        </div>
    );
}
