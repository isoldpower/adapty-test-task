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
                    className="rounded-t-2xl w-full h-[190px] max-w-[100%] object-cover"
                />
                <div className="px-4 pt-4 uppercase font-thin text-[1.2rem]! text-muted-foreground mb-2">
                    {post.category.join(', ')}
                </div>
                <h3 className="px-4 text-[calc(var(--h3)-4px)] mb-5">
                    {post.title}
                </h3>
                <MutedLabel className="px-4 pb-4 text-[calc(var(--space-s)+2px)] text-neutral-400!">
                    {literalPublishedAt} · {post.readingTime} min read
                </MutedLabel>
            </Card>
        </a>
    );
}

export { CompanyBlogPost };