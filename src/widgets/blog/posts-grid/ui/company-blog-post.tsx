import { Card } from "@shared/ui-toolkit";
import { MutedLabel } from "@entities/landing/typography";


interface CompanyBlogPostProps {
    post: {
        id: string;
        title: string;
        publishedAt: string;
        image: {
            src: string;
            alt: string;
        };
        slug: string;
        category: string[];
        readingTime: number;
    };
}

function CompanyBlogPost({
    post
}: CompanyBlogPostProps) {
    const literalPublishedAt = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <a href={`./blog/${post.slug}`} className="contents">
            <Card className="grid grid-rows-subgrid row-span-4 rounded-2xl! gap-0 p-0 shadow-none">
                <img
                    src={post.image.src}
                    alt={post.image.alt}
                    height={688}
                    width={1260}
                    className="rounded-t-2xl w-full max-w-[100%] object-cover"
                />
                <div className="p-xs md:p-[calc(var(--space-xs)+2px)] uppercase font-thin text-[1.2rem]! text-muted-foreground mb-[0.4rem] mt-[0.2rem]">
                    {post.category.join(', ')}
                </div>
                <h3 className="line-clamp-4 px-4 text-[1.6rem] sm:text-[calc(var(--h3)-10px] md:text-[calc(var(--h3)-7px)] lg:text-[calc(var(--h3)-4px)] mb-5">
                    {post.title}
                </h3>
                <MutedLabel className="flex flex-col md:flex-row text-[1.2rem] px-4 pb-4 lg:text-[calc(1.2rem+2px)] text-neutral-400!">
                    <span>{literalPublishedAt}</span>
                    <span className="hidden md:block">&nbsp;•&nbsp;</span>
                    <span>{post.readingTime} min read</span>
                </MutedLabel>
            </Card>
        </a>
    );
}

export { CompanyBlogPost };