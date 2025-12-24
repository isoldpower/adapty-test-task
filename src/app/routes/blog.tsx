import { createFileRoute } from '@tanstack/react-router';
import { blogLoader, BlogPageAdaptyLazy } from "@pages/blog";


export const Route = createFileRoute('/blog')({
    component: BlogPageAdaptyLazy,
    loader: blogLoader
});