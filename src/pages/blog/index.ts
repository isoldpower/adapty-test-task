import {lazy} from "react";

export const BlogPageAdaptyLazy = lazy(() => import('./ui/blog-page-adapty.tsx'));
export const BlogPageAttioLazy = lazy(() => import('./ui/blog-page-attio.tsx'));

export { BlogPageAttio } from './ui/blog-page-attio.tsx';
export { BlogPageAdapty } from './ui/blog-page-adapty.tsx';
export { blogLoader } from './data-fetch/blog-loader.ts';