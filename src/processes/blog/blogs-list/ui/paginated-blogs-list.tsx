import { useLoaderData } from "@tanstack/react-router";
import { CompanyBlogPost } from "@widgets/blog/posts-grid/ui/company-blog-post.tsx";
import { buildImageUrl } from "@app/sanity-cms";
import placeholder from "/images/image-placeholder.svg";


function PaginatedBlogsList() {
    const { postPreviews } = useLoaderData({
        from: '/blog'
    });

    return (
        <div className="w-full gap-8 grid grid-cols-1 xs:grid-cols-2 min-[576px]:grid-cols-3">
            {postPreviews.map((post) => (
                <CompanyBlogPost
                    key={post._id}
                    post={{
                        ...post,
                        id: post._id,
                        slug: post.slug.current,
                        image: post.image ? buildImageUrl(post.image) : placeholder,
                        category: 'general',
                        minutesToRead: 6
                    }}
                />
            ))}
        </div>
    );
}

export { PaginatedBlogsList };