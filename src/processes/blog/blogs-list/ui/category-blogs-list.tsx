import { useLoaderData } from "@tanstack/react-router";
import { CenteredGroup } from "@entities/landing/containers";
import { ChevronRightIcon } from "lucide-react";
import { CategoryBasedPost } from "@widgets/blog/posts-grid/ui/category-based-post.tsx";
import { buildImageUrl } from "@app/sanity-cms";


function CategoryBlogsList() {
    const { categoriesList } = useLoaderData({
        from: '/blog'
    });

    return (
        <div className='w-full flex flex-col gap-l'>
            {categoriesList.filter((category) => category.posts.length > 0).map((category) => (
                <div className="w-full flex flex-col" key={category._id}>
                    <div className="relative mb-xs flex justify-between w-full before:content-['_'] z-0 before:top-1/2 before:absolute before:left-0 before:w-full before:flex-1 before:border-t before:border-t-neutral-100/75">
                        <h3 className="bg-a-bg-website z-1 pr-4">
                            {category.title}
                        </h3>
                        <CenteredGroup orientation="horizontal" className="w-auto gap-4 bg-a-bg-website z-1 pl-4">
                            <a className="text-[calc(1.6rem-1px)] font-semibold" href={`./category/${category.slug}`}>
                                More posts
                            </a>
                            <ChevronRightIcon size={16} />
                        </CenteredGroup>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {category.posts.map((post) => (
                            <CategoryBasedPost
                                post={{
                                    ...post,
                                    image: { src: buildImageUrl(post.image.src), alt: post.title }
                                }}
                                key={post._id}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export { CategoryBlogsList };