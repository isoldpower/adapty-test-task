import { sanityClient } from "@app/sanity-cms/client.ts";
import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url";


interface ListPostsPreviewsOptions {
    order: 'asc' | 'desc';
    limit: number;
    pageSize: number;
    page: number;
}

type AuthorResponse = SanityDocument<{
    image: SanityImageSource;
    name: string;
    bio: string;
}>;

type PostImageResponse = SanityDocument<{
    alt: string;
    src: SanityImageSource;
}>;

type ListPostsPreviewsResponse = SanityDocument<{
    _id: string;
    title: string;
    publishedAt: string;
    category: string[];
    image: PostImageResponse;
    author: AuthorResponse;
    slug: string;
    readingTime: number;
}>[];

const listPostsPreviews = async ({
   order,
   limit,
   pageSize,
   page
}: ListPostsPreviewsOptions): Promise<ListPostsPreviewsResponse> => {
    const paginationChunk = `[${(page * pageSize).toString()}...${(page * pageSize + limit).toString()}]`;
    const sourceChunk = `*[_type == "post" && defined(slug.current)]`;
    const orderChunk = `order(publishedAt ${order})`;
    const requestedFields = [
        `_id`,
        `title`,
        `publishedAt`,
        `category`,
        `"slug": slug.current`,
        `image->{ src, alt }`,
        `author->{ name, image, bio }`,
        `"readingTime": round(length(pt::text(body)) / 5 / 180)`
    ];

    return sanityClient.fetch<ListPostsPreviewsResponse>(
        `${sourceChunk}|${orderChunk}${paginationChunk}{${requestedFields.join(', ')}}`
    );
}

export { listPostsPreviews };
export type { ListPostsPreviewsOptions, ListPostsPreviewsResponse };
