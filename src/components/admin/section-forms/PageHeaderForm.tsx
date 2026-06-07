'use client'
import { useState } from 'react'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

type I18n = { es: string; en: string }
type Settings = {
  style: 'dark-centered' | 'dark-image'
  textAlign: 'left' | 'center' | 'right'
  eyebrow: I18n
  title: I18n
  subtitle: I18n
  imageUrl: string
  ctaLabel: I18n
  ctaUrl: string
  ctaColor: 'whatsapp' | 'white' | 'navy' | 'outline'
  breadcrumb: I18n
}

const inputCls = 'w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#051c33] bg-white'
const labelCls = 'block text-xs font-medium text-gray-500 mb-1'

const STYLES = [
  { value: 'dark-centered', label: '🌑 Oscuro centrado', desc: 'Fondo azul sólido, texto centrado por defecto' },
  { value: 'dark-image',    label: '🖼️ Oscuro con imagen', desc: 'Imagen de fondo con overlay oscuro' },
]

const CTA_COLORS = [
  { value: 'whatsapp', label: 'WhatsApp', bg: '#25D366', text: 'white', preview: 'bg-[#25D366] text-white' },
  { value: 'white',    label: 'Blanco',   bg: '#ffffff', text: '#051c33', preview: 'bg-white text-[#051c33] border border-gray-200' },
  { value: 'navy',     label: 'Azul',     bg: '#051c33', text: 'white',   preview: 'bg-[#051c33] text-white' },
  { value: 'outline',  label: 'Borde',    bg: 'transparent', text: 'white', preview: 'bg-transparent text-white border border-white' },
]

export function PageHeaderForm({ settings, onChange }: { settings: Record<string, unknown>; onChange: (s: Record<string, unknown>) => void }) {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const s = settings as Settings
  const upd = (field: string, value: unknown) => onChange({ ...settings, [field]: value })
  const updI18n = (field: string, value: string) =>
    onChange({ ...settings, [field]: { ...(settings[field] as object ?? {}), [lang]: value } })

  const textAlign = s.textAlign ?? 'center'
  const ctaColor  = s.ctaColor  ?? 'whatsapp'

  return (
    <div className="space-y-4">
      {/* Style selector */}
      <div>
        <label className={labelCls}>Estilo de cabecera</label>
        <div className="space-y-2">
          {STYLES.map(opt => (
            <label key={opt.value} className={`flex items-start gap-3 px-3 py-3 rounded-xl border cursor-pointer transition-colors ${s.style === opt.value ? 'border-[#051c33] bg-[#051c33]/5' : 'border-gray-200 hover:border-gray-300'}`}>
              <input type="radio" name="style" value={opt.value} checked={s.style === opt.value} onChange={() => upd('style', opt.value)} className="accent-[#051c33] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#051c33]">{opt.label}</p>
                <p className="text-xs text-gray-400">{opt.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Alineación del texto */}
      <div>
        <label className={labelCls}>Alineación del texto</label>
        <div className="flex gap-2">
          {([
            { value: 'left',   icon: <AlignLeft size={15} />,   label: 'Izquierda' },
            { value: 'center', icon: <AlignCenter size={15} />, label: 'Centrado'  },
            { value: 'right',  icon: <AlignRight size={15} />,  label: 'Derecha'   },
          ] as const).map(opt => (
            <button
              key={opt.value}
              type="button"
              title={opt.label}
              onClick={() => upd('textAlign', opt.value)}
              className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg border text-xs transition-colors ${textAlign === opt.value ? 'border-[#051c33] bg-[#051c33]/5 text-[#051c33] font-semibold' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lang switcher */}
      <div className="flex gap-2">
        {(['es', 'en'] as const).map(l => (
          <button key={l} onClick={() => setLang(l)}
            className={`px-3 py-1 rounded text-xs font-bold uppercase ${lang === l ? 'bg-[#051c33] text-white' : 'bg-gray-100 text-gray-500'}`}>{l}</button>
        ))}
      </div>

      {/* Content fields */}
      <div className="space-y-3">
        <div>
          <label className={labelCls}>Eyebrow / Categoría</label>
          <input value={s.eyebrow?.[lang] ?? ''} onChange={e => updI18n('eyebrow', e.target.value)} className={inputCls} placeholder="Ej: Smile Makeover" />
        </div>
        <div>
          <label className={labelCls}>Título principal</label>
          <input value={s.title?.[lang] ?? ''} onChange={e => updI18n('title', e.target.value)} className={inputCls} placeholder="Título grande de la página" />
        </div>
        <div>
          <label className={labelCls}>Subtítulo / Descripción</label>
          <textarea value={s.subtitle?.[lang] ?? ''} onChange={e => updI18n('subtitle', e.target.value)} rows={3} className={inputCls} placeholder="Texto descriptivo debajo del título" />
        </div>
        <div>
          <label className={labelCls}>Texto del botón (opcional)</label>
          <input value={s.ctaLabel?.[lang] ?? ''} onChange={e => updI18n('ctaLabel', e.target.value)} className={inputCls} placeholder="Ej: Hablar por WhatsApp" />
        </div>
        <div>
          <label className={labelCls}>URL del botón</label>
          <input value={s.ctaUrl ?? ''} onChange={e => upd('ctaUrl', e.target.value)} className={inputCls} placeholder="/contacto" />
        </div>

        {/* Color del botón */}
        <div>
          <label className={labelCls}>Color del botón</label>
          <div className="grid grid-cols-2 gap-2">
            {CTA_COLORS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => upd('ctaColor', opt.value)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${ctaColor === opt.value ? 'border-[#051c33] ring-1 ring-[#051c33]' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <span className={`w-5 h-5 rounded-full flex-shrink-0 ${opt.preview}`} />
                {opt.label}
                {opt.value === 'whatsapp' && <span className="text-[10px] text-green-600 font-bold ml-auto">✓ WA</span>}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelCls}>Breadcrumb (texto de navegación, opcional)</label>
          <input value={s.breadcrumb?.[lang] ?? ''} onChange={e => updI18n('breadcrumb', e.target.value)} className={inputCls} placeholder="Ej: Servicios › Smile Makeover" />
        </div>
      </div>

      {/* Image — only for dark-image style */}
      {s.style === 'dark-image' && (
        <div>
          <label className={labelCls}>Imagen de fondo</label>
          <ImageUploader
            folder="site"
            currentUrl={s.imageUrl ?? ''}
            onUpload={url => upd('imageUrl', url)}
            label="Subir imagen de fondo"
          />
          <p className="text-xs text-gray-400 mt-1">Recomendado: imagen horizontal, mín. 1400×600px</p>
        </div>
      )}
    </div>
  )
}
