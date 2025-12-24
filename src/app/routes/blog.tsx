import { createFileRoute } from '@tanstack/react-router'
import { sanityClient } from "@app/sanity-cms/client.ts";
import type { SanityDocument } from "@sanity/client";


interface FetchPostsOptions {
    order: 'asc' | 'desc';
    limit: number;
    pageSize: number;
    page: number;
}

const fetchPostsQuery = async ({
    order,
    limit,
    pageSize,
    page
}: FetchPostsOptions) => {
    const paginationChunk = `[${(page * pageSize).toString()}...${(page * pageSize + limit).toString()}]`;
    const sourceChunk = `*[_type == "post" && defined(slug.current)]`;
    const orderChunk = `order(publishedAt ${order})`;

    return sanityClient.fetch<SanityDocument[]>(
        `${sourceChunk}|${orderChunk}${paginationChunk}{_id, title, slug, publishedAt}`
    );
}

export const Route = createFileRoute('/blog')({
    component: BlogPage,
    loader: async function () {
        const postPreviews = await fetchPostsQuery({
            order: 'desc',
            limit: 10,
            pageSize: 10,
            page: 0
        });

        return { postPreviews };
    }
});

function BlogPage() {
    const { postPreviews } = Route.useLoaderData();

    return (
        <div className="flex flex-col items-center gap-4">
            {postPreviews.map((post: SanityDocument) => (
                <div className="" key={post._id}>
                    <code>{JSON.stringify(post)}</code>
                </div>
            ))}
        </div>
    );
}