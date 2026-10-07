import { useParams, Navigate } from 'react-router-dom'
import { ArrowRight, Clock, Users, Package, ShieldCheck, Target, MessagesSquare, Trophy } from 'lucide-react'
import { GAMES, gameById, categoryById } from '../data/games'
import { Page, PageHeader, Button } from '../components/ui'

export default function Game() {
  const { id } = useParams()
  const g = gameById[id]
  if (!g) return <Navigate to="/games" replace />
  const next = GAMES[GAMES.indexOf(g) + 1]

  return (
    <Page>
      <PageHeader back="/games" eyebrow={g.cats.map((c) => categoryById[c].label).join(' · ')} title={g.name} subtitle={g.objective} />

      <div className="card p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <Meta icon={Clock} label="Time">{g.time}</Meta>
        <Meta icon={Users} label="Group">{g.group}</Meta>
        <Meta icon={Package} label="Equipment">{g.equipment.join(' · ')}</Meta>
      </div>

      <section className="mt-5 card p-5 bg-navy! text-on-navy border-navy!">
        <p className="eyebrow text-gold flex items-center gap-1.5"><Target size={14} /> Learning outcomes</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {g.outcomes.map((o) => <span key={o} className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium">{o}</span>)}
        </div>
      </section>

      <section className="mt-5 card p-5">
        <h2 className="display uppercase text-[1.6rem] mb-3">How to play</h2>
        <ol className="space-y-3">
          {g.steps.map((s, i) => (
            <li key={s} className="flex gap-3 items-start">
              <span className="grid place-items-center h-7 w-7 shrink-0 rounded-full bg-navy text-gold text-sm font-bold">{i + 1}</span>
              <span className="text-[15px] leading-relaxed pt-0.5">{s}</span>
            </li>
          ))}
        </ol>
        {g.points && <p className="mt-4 flex gap-2 text-sm text-muted"><Trophy size={16} className="shrink-0 mt-0.5 text-gold" /><span><b className="text-ink">Points (optional):</b> {g.points}</span></p>}
      </section>

      <section className="mt-5 rounded-2xl border border-bad/30 bg-bad-soft p-5">
        <h2 className="display uppercase text-[1.6rem] mb-3 flex items-center gap-2"><ShieldCheck size={22} /> Rules & safety</h2>
        <ul className="space-y-2.5">
          {g.safety.map((s) => <li key={s} className="flex gap-3 text-[15px] leading-relaxed"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-bad shrink-0" />{s}</li>)}
        </ul>
      </section>

      <section className="mt-5 card p-5">
        <h2 className="display uppercase text-[1.6rem] mb-1 flex items-center gap-2"><MessagesSquare size={22} /> Debrief questions</h2>
        <p className="text-sm text-muted mb-3">Debrief straight after, near the activity area, in a circle.</p>
        <ol className="space-y-2.5 list-decimal pl-5 marker:text-gold marker:font-bold">
          {g.debrief.map((q) => <li key={q} className="text-[15px] leading-relaxed pl-1">{q}</li>)}
        </ol>
      </section>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button to="/learn/games" variant="ghost" className="flex-1">Running camp games</Button>
        {next && <Button to={`/games/${next.id}`} className="flex-1">Next: {next.name} <ArrowRight size={18} /></Button>}
      </div>
    </Page>
  )
}

function Meta({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-2.5">
      <Icon size={18} className="text-gold shrink-0 mt-0.5" />
      <div>
        <p className="eyebrow text-muted">{label}</p>
        <p className="font-medium mt-0.5">{children}</p>
      </div>
    </div>
  )
}
