import { getPageBySlug, getSectionsByPage, upsertPage, upsertSection } from '@/lib/supabase/pages'
import { PageEditor } from '@/components/admin/PageEditor'
import { SERVICE_DETAIL_SEEDS } from '@/lib/service-detail-seeds'


export default async function PageEditorRoute({
  params,
}: {
  params: { slug: string }
}) {
  const rawSlug = params.slug
  const pageSlug = rawSlug === 'home' ? '/' : '/' + rawSlug.replace(/--/g, '/')

  let page = await getPageBySlug(pageSlug)
  if (!page) {
    page = await upsertPage({
      slug: pageSlug,
      title_i18n: { es: pageSlug, en: pageSlug },
      type: 'custom',
      status: 'draft',
      sort_order: 99,
    })
  }

  const sections = await getSectionsByPage(page.id)

  // Auto-seed service_detail section if page is empty and has seed content
  if (sections.length === 0 && SERVICE_DETAIL_SEEDS[pageSlug]) {
    try {
      await upsertSection({
        page_id: page.id,
        type: 'service_detail',
        sort_order: 0,
        is_visible: true,
        settings: SERVICE_DETAIL_SEEDS[pageSlug],
      })
    } catch (_) {}
    const freshSections = await getSectionsByPage(page.id)
    return <PageEditor page={page} initialSections={freshSections} />
  }

  return <PageEditor page={page} initialSections={sections} />
}
