import { Card } from "@shared/ui-toolkit";
import { MutedLabel } from "@entities/landing/typography";


interface CompanyBlogPostProps {
    post: {
        id: string;
        title: string;
        publishedAt: string;
        slug: string;
        image: string;
        category: string;
        minutesToRead: number;
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
        <a href={`./${post.id}`}>
            <Card className="rounded-2xl! gap-0 p-0 shadow-none">
                <img
                    src={post.image}
                    height={688}
                    width={1260}
                    className="rounded-t-2xl w-full h-[190px] max-w-[100%] object-cover"
                />
                <div className='flex flex-col p-s'>
                    <div className="uppercase font-thin text-[1.2rem]! text-muted-foreground mb-2">
                        {post.category}
                    </div>
                    <h3 className="text-[calc(var(--h3)-4px)] mb-5">
                        {post.title}
                    </h3>
                    <MutedLabel className="text-[calc(var(--space-s)+2px)] text-neutral-400!">
                        {literalPublishedAt} · {post.minutesToRead} min read
                    </MutedLabel>
                </div>
            </Card>
        </a>
    );
}

export { CompanyBlogPost };