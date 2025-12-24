import { countPosts, listPostsPreviews } from "@features/blog";
import type { BlogSearchParams } from "@app/routes/blog.tsx";


export async function blogLoader({ page }: BlogSearchParams) {
    const pageIndex = page - 1;
    const pageSize = 12;

    const postPreviews = await listPostsPreviews({
        page: pageIndex,
        order: 'desc',
        limit: pageSize,
        pageSize: pageSize,
    });
    const postsMeta = await countPosts({ pageSize });

    return {
        postPreviews,
        postsMeta
    };
}