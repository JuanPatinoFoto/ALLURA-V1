import { getPageBySlug, getSectionsByPage, upsertPage } from '@/lib/supabase/pages'
import { PageEditor } from '@/components/admin/PageEditor'
import { createClient } from '@/lib/supabase/client'
import { SERVICE_DETAIL_SEEDS } from '@/lib/service-detail-seeds'

const SITE_ID = '00000000-0000-0000-0000-000000000001'

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
    const supabase = createClient()
    await supabase.from('page_sections').insert({
      page_id: page.id,
      site_id: SITE_ID,
      type: 'service_detail',
      sort_order: 0,
      is_visible: true,
      settings: SERVICE_DETAIL_SEEDS[pageSlug],
    })
    const freshSections = await getSectionsByPage(page.id)
    return <PageEditor page={page} initialSections={freshSections} />
  }

  return <PageEditor page={page} initialSections={sections} />
}
