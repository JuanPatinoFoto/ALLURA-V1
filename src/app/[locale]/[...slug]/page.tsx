import { notFound } from 'next/navigation'
import { getPageBySlug, getSectionsByPage } from '@/lib/supabase/pages'
import { renderSection } from '@/lib/render-section'

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : 3600

export default async function CustomPage({
  params,
}: {
  params: { locale: string; slug: string[] }
}) {
  const locale = params.locale
  const slug = '/' + params.slug.join('/')

  const page = await getPageBySlug(slug)
  if (!page || page.status !== 'published') notFound()

  const sections = await getSectionsByPage(page.id)
  const rendered = sections
    .filter(s => s.is_visible)
    .map(s => renderSection(s, locale))
    .filter(Boolean)

  if (rendered.length === 0) notFound()

  return (
    <div className="pt-24">
      {rendered}
    </div>
  )
}
