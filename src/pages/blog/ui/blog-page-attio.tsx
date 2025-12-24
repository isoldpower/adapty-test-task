import { useLoaderData } from "@tanstack/react-router";

export function BlogPageAttio() {
    const { postPreviews } = useLoaderData({
        from: '/blog'
    });

    return (
        <div className="flex flex-col items-center gap-4">
            {postPreviews.map((post) => (
                <div className="" key={post._id}>
                    <h3>{JSON.stringify(post.title)}</h3>
                </div>
            ))}
        </div>
    );
}

export default BlogPageAttio;