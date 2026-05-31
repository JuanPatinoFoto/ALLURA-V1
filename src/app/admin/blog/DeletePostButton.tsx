'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

export function DeletePostButton({ postId, title }: { postId: string; title: string }) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)

  async function handleDelete() {
    setDeleting(true)
    const res = await fetch(`/api/admin/blog/${postId}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Error al eliminar el artículo')
      setDeleting(false)
      setConfirming(false)
    }
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2 justify-end">
        <span className="text-xs text-red-600 font-medium">¿Eliminar "{title}"?</span>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
        >
          {deleting ? 'Eliminando...' : 'Sí, eliminar'}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 justify-end">
      <button
        onClick={() => setConfirming(true)}
        className="text-gray-300 hover:text-red-500 transition-colors p-1"
        title="Eliminar artículo"
      >
        <Trash2 size={14} />
      </button>
    </div>
  )
}
