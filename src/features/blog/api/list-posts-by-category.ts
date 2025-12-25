import { sanityClient } from "@app/sanity-cms/client.ts";
import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url";


interface ListPostsByCategoryOptions {
    category: string;
    size: number;
    order?: 'asc' | 'desc';
}

type PostImageResponse = SanityDocument<{
    alt: string;
    src: SanityImageSource;
}>;

type ListPostsByCategoryResponse = SanityDocument<{
    _id: string;
    title: string;
    publishedAt: string;
    image: PostImageResponse;
    slug: string;
    readingTime: number;
}>[];

const listPostsByCategory = async ({
    category,
    size,
    order = 'desc'
}: ListPostsByCategoryOptions): Promise<ListPostsByCategoryResponse> => {
    const paginationChunk = `[0...${size.toString()}]`;
    const sourceChunk = `*[_type == "post" && defined(slug.current) && "${category}" in category[]->title]`;
    const orderChunk = `order(publishedAt ${order})`;
    const requestedFields = [
        `_id`,
        `title`,
        `publishedAt`,
        `image->{ src, alt }`,
        `"slug": slug.current`,
        `"readingTime": round(length(pt::text(body)) / 5 / 180)`
    ];

    return sanityClient.fetch<ListPostsByCategoryResponse>(
        `${sourceChunk}|${orderChunk}${paginationChunk}{${requestedFields.join(', ')}}`
    );
}

export { listPostsByCategory };
export type { ListPostsByCategoryOptions, ListPostsByCategoryResponse };
