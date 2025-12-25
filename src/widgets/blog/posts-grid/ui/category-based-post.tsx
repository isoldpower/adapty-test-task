import { buildImageUrl } from "@app/sanity-cms";

interface CategoryBasedPostProps {
    post: {
        title: string;
        image: {
            alt: string;
            src: string;
        };
        slug: string;
        readingTime: number;
    };
}

function CategoryBasedPost({
    post
}: CategoryBasedPostProps) {
    return (
        <a href={`./category/${post.slug}`} className="flex flex-col">
           <img
               height={688}
               width={1260}
               loading="lazy"
               src={buildImageUrl(post.image.src)}
               alt={post.image.alt}
               className="w-full h-auto mb-2 rounded-md object-cover"
           />
            <div className="px-[0.6rem] pt-4">
                <h2 className="text-[calc(var(--h4)-2px)] font-semibold line-clamp-3">
                    {post.title}
                </h2>
            </div>
        </a>
    );
}

export { CategoryBasedPost };