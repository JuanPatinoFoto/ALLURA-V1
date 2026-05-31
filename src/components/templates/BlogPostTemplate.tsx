import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "@/navigation";
import { CTABanner } from "@/components/sections/CTABanner";
import { ChevronLeft } from "lucide-react";
import type { BlogPostDetail } from "@/types/cms";

type RelatedPost = {
  _id: string
  title: { es: string; en: string }
  slug: { current: string }
  excerpt: { es: string; en: string }
  publishedAt: string
  category?: string
  featuredImage?: { asset: { url: string }; alt: { es: string; en: string } }
}

interface BlogPostTemplateProps {
  post: BlogPostDetail;
  locale: string;
  relatedPosts?: RelatedPost[];
}

function formatDate(isoString: string, locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoString));
  } catch {
    return isoString;
  }
}

export function BlogPostTemplate({ post, locale, relatedPosts = [] }: BlogPostTemplateProps) {
  const loc = locale as "es" | "en";
  const title = (post.title as { es: string; en: string })?.[loc] || (post.title as { es: string; en: string })?.es || "";
  const excerpt = (post.excerpt as { es: string; en: string })?.[loc] || (post.excerpt as { es: string; en: string })?.es || "";
  const bodyText = (post.body as unknown as { es: string; en: string })?.[loc] || (post.body as unknown as { es: string; en: string })?.es || "";
  const featuredImageUrl = post.featuredImage?.asset?.url;
  const featuredImageAlt = post.featuredImage?.alt?.[loc] || post.featuredImage?.alt?.es || title;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[420px]">
        {featuredImageUrl ? (
          <Image
            src={featuredImageUrl}
            alt={featuredImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/75 via-brand-navy/60 to-brand-navy/90" />

        <div className="relative z-10 container-allura px-6 md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-body text-sm text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft size={16} />
            {loc === "en" ? "Back to Blog" : "Volver al Blog"}
          </Link>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight max-w-3xl mb-6">
            {title}
          </h1>

          {excerpt && (
            <p className="font-body text-base text-white/75 max-w-2xl leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Meta bar */}
      <section className="bg-white border-b border-brand-light">
        <div className="container-allura px-6 md:px-12 py-4 flex flex-wrap gap-6 items-center">
          {post.publishedAt && (
            <span className="font-body text-sm text-brand-silver">
              {formatDate(post.publishedAt, locale)}
            </span>
          )}
          {post.author && (
            <span className="font-body text-sm text-brand-silver">
              {loc === "en" ? "By" : "Por"} {post.author.name}
            </span>
          )}
        </div>
      </section>

      {/* Article body */}
      <section className="section-padding bg-white">
        <div className="container-allura max-w-3xl">
          {bodyText ? (
            <div className="prose prose-allura max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="font-heading text-2xl md:text-3xl text-brand-navy mt-10 mb-4 leading-tight">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-heading text-xl text-brand-navy mt-8 mb-3 leading-tight">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="font-heading text-lg text-brand-navy mt-6 mb-2">{children}</h4>
                  ),
                  p: ({ children }) => (
                    <p className="font-body text-base text-brand-silver leading-relaxed mb-5">{children}</p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-brand-blue pl-5 my-6 italic font-body text-brand-silver">{children}</blockquote>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-brand-navy">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-5 space-y-1 font-body text-brand-silver">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-5 space-y-1 font-body text-brand-silver">{children}</ol>
                  ),
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  a: ({ href, children }) => (
                    <a
                      href={href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue underline hover:text-brand-navy transition-colors"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    <img src={src} alt={alt ?? ""} className="rounded-xl w-full my-6 object-cover" />
                  ),
                  hr: () => <hr className="border-brand-light my-8" />,
                }}
              >
                {bodyText}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="font-body text-brand-silver italic">
              {loc === "en" ? "Content not available yet." : "Contenido no disponible aún."}
            </p>
          )}
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#eaeeef] py-16 px-6 md:px-12">
          <div className="container-allura">
            <h2 className="font-heading text-2xl md:text-3xl text-brand-navy mb-2">
              {loc === "en" ? "You might also like" : "También te puede interesar"}
            </h2>
            <p className="font-body text-sm text-brand-silver mb-10">
              {loc === "en" ? "More articles from Allura Healthcare" : "Más artículos de Allura Healthcare"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(p => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug.current}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-brand-light hover:shadow-md hover:border-brand-blue/30 transition-all duration-200"
                >
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-brand-light">
                    {p.featuredImage?.asset?.url ? (
                      <Image
                        src={p.featuredImage.asset.url}
                        alt={p.title?.[loc] || p.title?.es || ""}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-navy/10 flex items-center justify-center">
                        <span className="text-3xl">📝</span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    {p.category && (
                      <p className="font-body text-xs tracking-wide uppercase text-brand-blue mb-2">{p.category}</p>
                    )}
                    <h3 className="font-heading text-base text-brand-navy leading-snug group-hover:text-brand-blue transition-colors mb-2">
                      {p.title?.[loc] || p.title?.es}
                    </h3>
                    <p className="font-body text-sm text-brand-silver leading-relaxed line-clamp-2">
                      {p.excerpt?.[loc] || p.excerpt?.es}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
