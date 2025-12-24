import { createFileRoute } from '@tanstack/react-router';
import { blogLoader, BlogPageAdaptyLazy } from "@pages/blog";
import { z } from "zod";


const searchSchema = z.object({
    page: z.number().default(1)
});

type BlogSearchParams = z.infer<typeof searchSchema>;

export const Route = createFileRoute('/blog')({
    component: BlogPageAdaptyLazy,
    validateSearch: searchSchema,
    loaderDeps: ({ search }) => ({
        page: search.page
    }),
    loader: ({ deps }) => blogLoader(deps),
});

export type { BlogSearchParams };