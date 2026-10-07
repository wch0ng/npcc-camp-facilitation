import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Layers, Theater } from 'lucide-react'
import { useProgress } from '../hooks/useProgress'
import Logo from '../components/Logo'
import { MODULES } from '../data/modules'
import { FLASHCARDS } from '../data/flashcards'
import { ALL_SCENARIOS } from '../data/scenarios'
import { Page, Ring, SectionLabel, ConfirmButton } from '../components/ui'

export default function Home() {
  const { progress, resetAll } = useProgress()
  const read = MODULES.filter((m) => progress.modules[m.id]).length
  const known = FLASHCARDS.filter((c) => progress.flashcards[c.id] === 'known').length
  const scen = ALL_SCENARIOS.filter((s) => progress.scenarios[s.id]?.done).length
  const next = MODULES.find((m) => !progress.modules[m.id]) ?? MODULES[0]

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-on-navy safe-top relative overflow-hidden">
        <div aria-hidden className="absolute -right-16 -top-10 h-64 w-64 rounded-full border-[28px] border-gold/15" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-10 pb-14 relative">
          <div className="flex items-center gap-3">
            <Logo size={44} className="ring-1 ring-white/15" />
            <p className="eyebrow text-gold">National Police Cadet Corps</p>
          </div>
          <h1 className="display uppercase text-[3.2rem] sm:text-6xl mt-5">
            Camp<br />Facilitation
          </h1>
          <p className="mt-3 text-on-navy/75 max-w-md">Your course companion: modules, flash cards and camp scenarios.</p>
          <Link to={`/learn/${next.id}`} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold text-navy font-semibold px-5 py-3 active:scale-[0.98] transition">
            {read === 0 ? 'Start module 1' : read === MODULES.length ? 'Review modules' : `Continue: ${next.title}`} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Page className="-mt-6 relative">
        {/* Progress strip */}
        <div className="card p-4 grid grid-cols-3 divide-x divide-line">
          <Stat to="/learn" icon={BookOpen} value={`${read}/${MODULES.length}`} label="Modules read" ring={[read, MODULES.length]} />
          <Stat to="/practice/flashcards" icon={Layers} value={`${known}/${FLASHCARDS.length}`} label="Cards known" ring={[known, FLASHCARDS.length]} />
          <Stat to="/practice/scenarios" icon={Theater} value={`${scen}/${ALL_SCENARIOS.length}`} label="Scenarios done" ring={[scen, ALL_SCENARIOS.length]} />
        </div>

        {/* Module list */}
        <SectionLabel className="mt-9">Course modules</SectionLabel>
        <ol className="card divide-y divide-line overflow-hidden">
          {MODULES.map((m) => (
            <li key={m.id}>
              <Link to={`/learn/${m.id}`} className="flex items-center gap-4 px-4 py-3.5 hover:bg-surface-2 transition">
                <span className={`display text-2xl w-7 text-center ${progress.modules[m.id] ? 'text-gold' : 'text-faint'}`}>{m.num}</span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold">{m.title}</span>
                  <span className="block text-sm text-muted truncate">{m.tagline}</span>
                </span>
                {progress.modules[m.id] && <span className="text-xs font-semibold text-good">Read</span>}
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <ConfirmButton label="Reset all progress" confirmLabel="Tap again to erase everything" onConfirm={resetAll} className="text-xs text-faint underline underline-offset-4" />
        </div>
      </Page>
    </div>
  )
}

function Stat({ to, icon: Icon, value, label, ring }) {
  return (
    <Link to={to} className="flex flex-col items-center text-center gap-2 px-1">
      <Ring value={ring[0]} max={ring[1]} size={44} stroke={5}><Icon size={16} className="text-muted" /></Ring>
      <span className="display text-2xl leading-none">{value}</span>
      <span className="text-[11px] font-medium text-muted leading-tight">{label}</span>
    </Link>
  )
}
