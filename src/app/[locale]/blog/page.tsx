import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { client } from "@/sanity/lib/client";
import {
  blogCategoriesQuery,
  blogPostListQuery,
  type BlogCategory,
  type BlogPostListItem,
} from "@/sanity/lib/queries";
import { BlogListTemplate } from "@/components/templates/BlogListTemplate";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 3600;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function BlogPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { categoria?: string };
}) {
  const categorySlug = searchParams.categoria ?? null;

  const [categories, posts] = await Promise.all([
    client.fetch<BlogCategory[]>(blogCategoriesQuery, {}, { next: { revalidate } }),
    client.fetch<BlogPostListItem[]>(
      blogPostListQuery,
      { categorySlug },
      { next: { revalidate } }
    ),
  ]);

  return (
    <BlogListTemplate
      posts={posts ?? []}
      categories={categories ?? []}
      activeCategorySlug={categorySlug ?? undefined}
      locale={locale}
    />
  );
}
