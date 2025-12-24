import { listPostsPreviews } from "@features/blog";


export async function blogLoader() {
    const postPreviews = await listPostsPreviews({
        order: 'desc',
        limit: 10,
        pageSize: 10,
        page: 0
    });

    return { postPreviews };
}