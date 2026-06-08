'use client'
import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

type I18n = { es: string; en: string }
type Step = { title: I18n; description: I18n }
type Settings = {
  category: I18n
  categorySlug: string
  title: I18n
  description: I18n
  benefits: I18n[]
  steps: Step[]
  candidates: I18n[]
  timeline: I18n
  whyBody: I18n
}

const inputCls = 'w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#051c33] bg-white'
const labelCls = 'block text-xs font-medium text-gray-500 mb-1'

const emptyI18n = (): I18n => ({ es: '', en: '' })
const emptyStep = (): Step => ({ title: emptyI18n(), description: emptyI18n() })

export function ServiceDetailForm({ settings, onChange }: { settings: Record<string, unknown>; onChange: (s: Record<string, unknown>) => void }) {
  const [lang, setLang] = useState<'es' | 'en'>('es')
  const [tab, setTab] = useState<'hero' | 'benefits' | 'steps' | 'candidates' | 'why'>('hero')
  const s = settings as Settings

  const upd = (field: string, value: unknown) => onChange({ ...settings, [field]: value })
  const updI18n = (field: string, value: string) =>
    onChange({ ...settings, [field]: { ...(settings[field] as object ?? {}), [lang]: value } })

  const benefits   = (s.benefits   ?? []) as I18n[]
  const steps      = (s.steps      ?? []) as Step[]
  const candidates = (s.candidates ?? []) as I18n[]

  // Benefits helpers
  const updBenefit = (i: number, val: string) => {
    const updated = benefits.map((b, idx) => idx === i ? { ...b, [lang]: val } : b)
    upd('benefits', updated)
  }
  const addBenefit = () => upd('benefits', [...benefits, emptyI18n()])
  const removeBenefit = (i: number) => upd('benefits', benefits.filter((_, idx) => idx !== i))

  // Steps helpers
  const updStep = (i: number, field: 'title' | 'description', val: string) => {
    const updated = steps.map((s, idx) => idx === i ? { ...s, [field]: { ...s[field], [lang]: val } } : s)
    upd('steps', updated)
  }
  const addStep = () => upd('steps', [...steps, emptyStep()])
  const removeStep = (i: number) => upd('steps', steps.filter((_, idx) => idx !== i))

  // Candidates helpers
  const updCandidate = (i: number, val: string) => {
    const updated = candidates.map((c, idx) => idx === i ? { ...c, [lang]: val } : c)
    upd('candidates', updated)
  }
  const addCandidate = () => upd('candidates', [...candidates, emptyI18n()])
  const removeCandidate = (i: number) => upd('candidates', candidates.filter((_, idx) => idx !== i))

  const TABS = [
    ['hero',       '🏔️ Hero'],
    ['benefits',   '✅ Beneficios'],
    ['steps',      '📋 Proceso'],
    ['candidates', '👤 Candidatos'],
    ['why',        '💙 Por qué Allura'],
  ] as const

  return (
    <div className="space-y-3">
      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 flex-wrap">
        {TABS.map(([t, label]) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors min-w-[80px] ${tab === t ? 'bg-white text-[#051c33] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Lang switcher */}
      <div className="flex gap-2">
        {(['es', 'en'] as const).map(l => (
          <button key={l} onClick={() => setLang(l)}
            className={`px-3 py-1 rounded text-xs font-bold uppercase ${lang === l ? 'bg-[#051c33] text-white' : 'bg-gray-100 text-gray-500'}`}>{l}</button>
        ))}
      </div>

      {/* HERO TAB */}
      {tab === 'hero' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Categoría (texto)</label>
              <input value={s.category?.[lang] ?? ''} onChange={e => updI18n('category', e.target.value)} className={inputCls} placeholder="Ej: Smile Makeover" />
            </div>
            <div>
              <label className={labelCls}>Slug de categoría</label>
              <input value={s.categorySlug ?? ''} onChange={e => upd('categorySlug', e.target.value)} className={inputCls} placeholder="Ej: smile-makeover" />
            </div>
          </div>
          <div>
            <label className={labelCls}>Título del servicio</label>
            <input value={s.title?.[lang] ?? ''} onChange={e => updI18n('title', e.target.value)} className={inputCls} placeholder="Ej: Carillas en Porcelana" />
          </div>
          <div>
            <label className={labelCls}>Descripción (aparece en el hero)</label>
            <textarea value={s.description?.[lang] ?? ''} onChange={e => updI18n('description', e.target.value)} rows={4} className={inputCls} placeholder="Descripción del servicio..." />
          </div>
        </div>
      )}

      {/* BENEFITS TAB */}
      {tab === 'benefits' && (
        <div className="space-y-2">
          <p className="text-xs text-gray-400 bg-gray-50 rounded p-2">Cada línea es un beneficio. Aparecen como lista de puntos.</p>
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-2 items-center">
              <span className="text-xs text-gray-400 w-5 flex-shrink-0">{i + 1}.</span>
              <input value={b[lang] ?? ''} onChange={e => updBenefit(i, e.target.value)} className={inputCls} placeholder={`Beneficio ${i + 1}`} />
              <button type="button" onClick={() => removeBenefit(i)} className="text-red-400 hover:text-red-600 flex-shrink-0"><Trash2 size={13} /></button>
            </div>
          ))}
          <button type="button" onClick={addBenefit}
            className="flex items-center gap-1 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100">
            <Plus size={11} /> Agregar beneficio
          </button>
        </div>
      )}

      {/* STEPS TAB */}
      {tab === 'steps' && (
        <div className="space-y-3">
          <p className="text-xs text-gray-400 bg-gray-50 rounded p-2">Pasos del proceso. Se muestran numerados como 01, 02…</p>
          {steps.map((step, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-[#051c33]">Paso 0{i + 1}</span>
                {steps.length > 1 && (
                  <button type="button" onClick={() => removeStep(i)} className="text-red-400 hover:text-red-600"><Trash2 size={12} /></button>
                )}
              </div>
              <div>
                <label className={labelCls}>Título</label>
                <input value={step.title?.[lang] ?? ''} onChange={e => updStep(i, 'title', e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Descripción</label>
                <textarea value={step.description?.[lang] ?? ''} onChange={e => updStep(i, 'description', e.target.value)} rows={2} className={inputCls} />
              </div>
            </div>
          ))}
          {steps.length < 8 && (
            <button type="button" onClick={addStep}
              className="flex items-center gap-1 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100">
              <Plus size={11} /> Agregar paso
            </button>
          )}
        </div>
      )}

      {/* CANDIDATES TAB */}
      {tab === 'candidates' && (
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-xs text-gray-400 bg-gray-50 rounded p-2">¿Para quién es ideal este tratamiento?</p>
            {candidates.map((c, i) => (
              <div key={i} className="flex gap-2 items-center">
                <span className="text-xs text-gray-400 w-5 flex-shrink-0">{i + 1}.</span>
                <input value={c[lang] ?? ''} onChange={e => updCandidate(i, e.target.value)} className={inputCls} placeholder={`Candidato ${i + 1}`} />
                <button type="button" onClick={() => removeCandidate(i)} className="text-red-400 hover:text-red-600 flex-shrink-0"><Trash2 size={13} /></button>
              </div>
            ))}
            <button type="button" onClick={addCandidate}
              className="flex items-center gap-1 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-100">
              <Plus size={11} /> Agregar candidato
            </button>
          </div>
          <div>
            <label className={labelCls}>Duración / Timeline</label>
            <textarea value={s.timeline?.[lang] ?? ''} onChange={e => updI18n('timeline', e.target.value)} rows={3} className={inputCls} placeholder="Ej: El proceso completo dura entre 2 y 3 semanas…" />
          </div>
        </div>
      )}

      {/* WHY TAB */}
      {tab === 'why' && (
        <div className="space-y-3">
          <p className="text-xs text-gray-400 bg-gray-50 rounded p-2">Sección oscura al final. Si la dejas vacía no aparece.</p>
          <div>
            <label className={labelCls}>Texto "Por qué Allura"</label>
            <textarea value={s.whyBody?.[lang] ?? ''} onChange={e => updI18n('whyBody', e.target.value)} rows={5} className={inputCls} placeholder="Explica por qué Allura es la mejor opción para este tratamiento..." />
          </div>
        </div>
      )}
    </div>
  )
}
