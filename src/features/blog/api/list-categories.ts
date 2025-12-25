import { sanityClient } from "@app/sanity-cms/client.ts";
import type { SanityDocument } from "@sanity/client";


interface ListCategoriesOptions {
    order?: 'asc' | 'desc';
    size: number
}

type ListCategoriesResponseItem = SanityDocument<{
    _id: string;
    title: string;
    slug: string;
}>;

type ListCategoriesResponse = ListCategoriesResponseItem[];

const listCategories = async ({
    order = 'desc',
    size
}: ListCategoriesOptions): Promise<ListCategoriesResponse> => {
    const paginationChunk = `[0...${size.toString()}]`;
    const sourceChunk = `*[_type == "category" && defined(slug.current)]`;
    const orderChunk = `order(publishedAt ${order})`;
    const requestedFields = [
        `_id`,
        `title`,
        `"slug": slug.current`
    ];

    return sanityClient.fetch<ListCategoriesResponse>(
        `${sourceChunk}|${orderChunk}${paginationChunk}{${requestedFields.join(', ')}}`
    );
}

export { listCategories };
export type { ListCategoriesResponseItem, ListCategoriesOptions, ListCategoriesResponse };
