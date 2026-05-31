import { createClient } from '@/lib/supabase/client'
import { BlogForm } from './BlogForm'

const SITE_ID = '00000000-0000-0000-0000-000000000001'

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const isNew = params.id === 'nuevo'
  const supabase = createClient()
  let post = null

  // Load post and all existing categories in parallel
  const [postResult, categoriesResult] = await Promise.all([
    isNew ? Promise.resolve({ data: null }) : supabase.from('blog_posts').select('*').eq('id', params.id).single(),
    supabase.from('blog_posts').select('category').eq('site_id', SITE_ID).not('category', 'is', null),
  ])

  post = postResult.data
  const existingCategories = [...new Set(
    (categoriesResult.data ?? []).map((r: any) => r.category).filter(Boolean)
  )] as string[]

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#051c33] mb-6">{isNew ? 'Nuevo artículo' : 'Editar artículo'}</h1>
      <BlogForm post={post} siteId={SITE_ID} existingCategories={existingCategories} />
    </div>
  )
}
