import { Link, useLoaderData, useSearch } from "@tanstack/react-router";
import { CompanyBlogPost } from "@widgets/blog/posts-grid/ui/company-blog-post.tsx";
import { buildImageUrl } from "@app/sanity-cms";


function PaginatedBlogsList() {
    const searchParams = useSearch({
        from: '/blog'
    });
    const {postPreviews, postsMeta} = useLoaderData({
        from: '/blog'
    });

    return (
        <div className='w-full flex flex-col gap-12'>
            <div className="w-full gap-xs lg:gap-s grid grid-cols-1 xs:grid-cols-2 min-[576px]:grid-cols-3">
                {postPreviews.map((post) => (
                    <CompanyBlogPost
                        key={post._id}
                        post={{
                            ...post,
                            id: post._id,
                            image: {
                                src: buildImageUrl(post.image.src),
                                alt: post.image.alt,
                            }
                        }}
                    />
                ))}
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
                {Array.from({length: postsMeta.pages}).map((_, index) => (
                    <Link
                        resetScroll={false}
                        to='.'
                        search={(prev) => ({...prev, page: index + 1})}
                        replace
                        aria-selected={index === searchParams.page - 1}
                        key={index}
                        className="flex flex-col items-center justify-center p-4 aria-selected:bg-a-black aria-selected:text-accent-foreground rounded-full size-[32px]"
                    >
                        <span className="text-2xl">
                            {index + 1}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export { PaginatedBlogsList };