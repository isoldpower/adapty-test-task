import { sanityClient } from "@app/sanity-cms/client.ts";
import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url";


interface ListPostsPreviewsOptions {
    order: 'asc' | 'desc';
    limit: number;
    pageSize: number;
    page: number;
}

type ListPostsPreviewsResponse = SanityDocument<{
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    image?: SanityImageSource;
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

    return sanityClient.fetch<ListPostsPreviewsResponse>(
        `${sourceChunk}|${orderChunk}${paginationChunk}{_id, title, slug, publishedAt, image}`
    );
}

export { listPostsPreviews };
export type { ListPostsPreviewsOptions, ListPostsPreviewsResponse };
