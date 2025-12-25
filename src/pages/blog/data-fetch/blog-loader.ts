import type {ListPostsByCategoryResponse} from "@features/blog";
import {
    countPosts,
    listCategories,
    listPostsByCategory,
    listPostsPreviews
} from "@features/blog";
import type {BlogSearchParams} from "@app/routes/blog.tsx";
import type {ListCategoriesResponseItem} from "@features/blog/api/list-categories.ts";


type CategoryWithPosts = ListCategoriesResponseItem & {
    posts: ListPostsByCategoryResponse
};

async function fetchCategories({
    order
}: { order: 'asc' | 'desc' }): Promise<CategoryWithPosts[]> {
    const categoriesList = await listCategories({
        order,
        size: 9
    });

    const categoryPromises: Promise<CategoryWithPosts>[] = [];
    for (const category of categoriesList) {
        const promise = listPostsByCategory({ order, size: 4, category: category.title })
            .then((posts) => ({ ...category, posts }));

        categoryPromises.push(promise);
    }

    return await Promise.all(categoryPromises);
}

export async function blogLoader({ page }: BlogSearchParams) {
    const pageIndex = page - 1;
    const pageSize = 12;
    const order = 'desc';

    const postPreviews = await listPostsPreviews({
        order,
        page: pageIndex,
        limit: pageSize,
        pageSize: pageSize,
    });
    const postsMeta = await countPosts({ pageSize });
    const categoriesList = await fetchCategories({ order });

    return {
        postPreviews,
        postsMeta,
        categoriesList
    };
}