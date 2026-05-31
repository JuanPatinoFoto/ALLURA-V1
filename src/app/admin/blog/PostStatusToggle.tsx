'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserSupabaseClient } from '@/lib/supabase/browser-client'

export function PostStatusToggle({ postId, status }: { postId: string; status: string }) {
  const router = useRouter()
  const [current, setCurrent] = useState(status)
  const [saving, setSaving] = useState(false)

  async function handleChange(newStatus: string) {
    setSaving(true)
    const supabase = createBrowserSupabaseClient()
    await supabase
      .from('blog_posts')
      .update({
        status: newStatus,
        published_at: newStatus === 'published' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', postId)
    setCurrent(newStatus)
    setSaving(false)
    router.refresh()
  }

  return (
    <select
      value={current}
      disabled={saving}
      onChange={e => handleChange(e.target.value)}
      className={`text-xs px-2 py-1 rounded-full font-medium border-0 cursor-pointer focus:outline-none transition-colors disabled:opacity-60
        ${current === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
    >
      <option value="published">Publicado</option>
      <option value="draft">Borrador</option>
    </select>
  )
}
