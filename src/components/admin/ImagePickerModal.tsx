'use client'
import { useState, useEffect, useCallback } from 'react'
import { X, Search } from 'lucide-react'
import Image from 'next/image'

interface ImageEntry { name: string; url: string }

interface ImagePickerModalProps {
  onSelect: (url: string) => void
  onClose: () => void
}

export function ImagePickerModal({ onSelect, onClose }: ImagePickerModalProps) {
  const [images, setImages] = useState<ImageEntry[]>([])
  const [filtered, setFiltered] = useState<ImageEntry[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/images')
      .then(r => r.json())
      .then(data => { setImages(data); setFiltered(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const q = search.toLowerCase()
    setFiltered(q ? images.filter(img => img.name.toLowerCase().includes(q)) : images)
  }, [search, images])

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-[#051c33] flex-1">Elegir imagen del proyecto</h2>
          <div className="relative flex-1 max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar por nombre..."
              className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#051c33]"
              autoFocus
            />
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1">
            <X size={18} />
          </button>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center h-40 text-gray-400 text-sm">Cargando imágenes...</div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center h-40 text-gray-400 text-sm">No se encontraron imágenes</div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {filtered.map(img => (
                <button
                  key={img.url}
                  onClick={() => { onSelect(img.url); onClose() }}
                  className="group relative aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-[#051c33] transition-all"
                  title={img.name}
                >
                  <Image
                    src={img.url}
                    alt={img.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="150px"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-[10px] truncate leading-tight">{img.name}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-3 border-t border-gray-100 text-xs text-gray-400 text-center">
          {filtered.length} imágenes disponibles · Presiona Esc para cerrar
        </div>
      </div>
    </div>
  )
}
