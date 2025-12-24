import { sanityClient } from "@app/sanity-cms";


interface CountPostsOptions {
    pageSize: number;
}

interface CountPostsResponse {
    total: number;
    pages: number;
}

const countPosts = async ({
    pageSize
}: CountPostsOptions): Promise<CountPostsResponse> => {
    const total = await sanityClient.fetch<number>(
        `count(*[_type == "post" && defined(slug.current)])`
    );
    const pages = Math.ceil(total / pageSize);

    return { total, pages };
}

export { countPosts };
export type { CountPostsResponse };