import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBlogPosts } from "@/lib/supabase/blog";
import type { BlogPostListItem, BlogCategory } from "@/types/cms";
import { BlogListTemplate } from "@/components/templates/BlogListTemplate";
import { getSiteSettings } from "@/lib/getSiteSettings";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const [t, settings] = await Promise.all([
    getTranslations({ locale, namespace: "blog" }),
    getSiteSettings(),
  ]);
  const ogImageUrl = settings?.seoImageUrl;
  const title = t("metaTitle");
  const description = t("metaDesc");
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(ogImageUrl && { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }),
    },
  };
}

export default async function BlogPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { categoria?: string };
}) {
  const loc = locale as "es" | "en";
  const activeCategory = searchParams?.categoria ?? null;
  const posts = await getBlogPosts();

  // Map Supabase BlogPost[] to BlogPostListItem[] (Sanity shape expected by template)
  const mappedPosts: BlogPostListItem[] = posts.map((post) => ({
    _id: post.id,
    title: post.title as { es: string; en: string },
    slug: { current: post.slug },
    excerpt: post.excerpt as { es: string; en: string },
    publishedAt: post.publishedAt ?? new Date().toISOString(),
    featuredImage: post.coverImageUrl
      ? {
          asset: { _id: post.id, url: post.coverImageUrl },
          alt: { es: post.coverImageAlt ?? "", en: post.coverImageAlt ?? "" },
        }
      : undefined,
    author: post.author ? { name: post.author } : undefined,
    categories: post.category
      ? [{ _id: post.category, title: { es: post.category, en: post.category }, slug: { current: post.category.toLowerCase().replace(/\s+/g, '-') } }]
      : undefined,
  }));

  // Build unique categories from posts
  const categorySet = new Map<string, BlogCategory>()
  posts.forEach(post => {
    if (post.category) {
      const slug = post.category.toLowerCase().replace(/\s+/g, '-')
      categorySet.set(slug, {
        _id: slug,
        title: { es: post.category, en: post.category },
        slug: { current: slug },
      })
    }
  })
  const categories: BlogCategory[] = Array.from(categorySet.values());

  // Filter posts by active category
  const filteredPosts = activeCategory
    ? mappedPosts.filter(p =>
        p.categories?.some(c => c.slug.current === activeCategory)
      )
    : mappedPosts;

  return (
    <BlogListTemplate
      posts={filteredPosts}
      categories={categories}
      activeCategorySlug={activeCategory ?? undefined}
      locale={locale}
    />
  );
}
