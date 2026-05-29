'use client'
import { useState } from 'react'
type I18n = { es: string; en: string }

export function FaqForm({ settings, onChange }: { settings: Record<string, unknown>; onChange: (s: Record<string, unknown>) => void }) {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const s = settings as { eyebrow: I18n; title: I18n }
  const upd = (f: string, v: string) => onChange({ ...settings, [f]: { ...(settings[f] as object ?? {}), [lang]: v } })

  return (
    <div className="space-y-3">
      <div className="flex gap-2 mb-2">
        {(['es', 'en'] as const).map(l => (
          <button key={l} onClick={() => setLang(l)}
            className={`px-3 py-1 rounded text-xs font-bold uppercase ${lang === l ? 'bg-[#051c33] text-white' : 'bg-gray-100 text-gray-500'}`}>{l}</button>
        ))}
      </div>
      <p className="text-xs text-gray-400 bg-gray-50 rounded p-2">Las preguntas frecuentes se cargan automáticamente de la base de datos.</p>
      {[['eyebrow','Eyebrow'],['title','Título']].map(([f, label]) => (
        <div key={f}>
          <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
          <input value={(s[f as 'eyebrow'|'title'] as I18n)?.[lang] ?? ''} onChange={e => upd(f, e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#051c33]" />
        </div>
      ))}
    </div>
  )
}
