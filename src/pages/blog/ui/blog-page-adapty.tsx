import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { DefaultHeading } from "@entities/landing/typography";
import { EbookCtaPost, FeaturedBlogPost } from "@widgets/blog/featured-posts";
import { PaginatedBlogsList } from "@processes/blog/blogs-list/ui/paginated-blogs-list.tsx";
import { CategoryBlogsList } from "@processes/blog/blogs-list";
import { FooterSection } from "@processes/landing/footer-section";
import { PostsSearchFilters } from "@widgets/blog/posts-search-filters/ui/posts-search-filters.tsx";


export function BlogPageAdapty() {
    return (
        <>
            <AdaptySection variant='cold' className="pb-0!">
                <AdaptyContainer className='items-center'>
                    <DefaultHeading heading='h2'>
                        Latest news and insights from Adapty
                    </DefaultHeading>
                    <PostsSearchFilters />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='cold'>
                <AdaptyContainer>
                    <div className="mb-xl">
                        <FeaturedBlogPost
                            description='When teams choose between native and hybrid app development, they often frame the decision as a trade-off between speed and quality. Hybrid apps promise faster launches and lower costs, while native apps are associated with performance and polish. But in…'
                            title='Native vs hybrid apps: Key differences'
                            publishDate='June 10, 2024'
                            readTime='8 min read'
                            image='https://adapty.io/assets/uploads/2025/12/native-vs-hybrid-apps.png'
                            author={{
                                image: 'https://secure.gravatar.com/avatar/c65ab2f3e99a34c5360d4eecef2ae594e986b33647203ae83934630d1fd7ed8a?s=150&d=mm&r=g',
                                name: 'Victoria Kharlan',
                                quote: 'Lessons I wish I had. Now yours.'
                            }}
                        />
                    </div>
                    <div className="mb-xl">
                        <EbookCtaPost
                            title="Scale your app from $10K to $100K MRR"
                            description="Proven strategies to break past the $10K ceiling in one free ebook. Learn the strategies top apps are using to 10x their revenue."
                            image="https://adapty.io/assets/uploads/2025/10/og-ebook-10k-to-100k-mrr.webp"
                        />
                    </div>
                    <PaginatedBlogsList />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <CategoryBlogsList />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent' className='pb-12!'>
                <AdaptyContainer>
                    <FooterSection />
                </AdaptyContainer>
            </AdaptySection>
        </>
    );
}

export default BlogPageAdapty;