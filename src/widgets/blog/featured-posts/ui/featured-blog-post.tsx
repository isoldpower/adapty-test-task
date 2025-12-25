import { MutedLabel } from "@entities/landing/typography";


interface FeaturedBlogPostProps {
    title: string;
    description: string;
    publishDate: string;
    readTime: string;
    image: string;
    author: {
        image: string;
        name: string;
        quote: string;
    };
}


function FeaturedBlogPost({
    title,
    description,
    publishDate,
    readTime,
    image,
    author
}: FeaturedBlogPostProps) {
    return (
        <article className="grid grid-cols-1 min-[576px]:grid-cols-2 gap-s lg:gap-l overflow-hidden">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover rounded-2xl"
                    width={1260}
                    height={688}
                />
            </div>
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <MutedLabel className="text-[1.2rem] md:text-[calc(1.2rem+1px)] lg:text-[calc(1.2rem+2px)]">
                        {publishDate} • {readTime}
                    </MutedLabel>
                    <h2 className="text-[calc(var(--h2)-8px)] md:text-[calc(var(--h2)-4px) lg:text-[var(--h2)] font-bold leading-tight text-gray-900">
                        {title}
                    </h2>
                    <p className="line-clamp-3 text-[calc(1.6rem-2px)] sm:text-[calc(1.6rem-4px)] md:text-[calc(1.6rem-2px)] lg:text-[1.6rem] text-gray-600 font-normal">
                        {description}
                    </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                    <img
                        src={author.image}
                        alt={author.name}
                        width={44}
                        height={44}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <div className="font-bold text-gray-900 text-2xl ">
                            {author.name}
                        </div>
                        <div className="font-normal text-lg">
                            {author.quote}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export { FeaturedBlogPost };
export type { FeaturedBlogPostProps };
