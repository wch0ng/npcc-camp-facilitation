import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Snowflake, Zap, Flag, Puzzle, Megaphone, HeartHandshake, Trophy, CloudRain } from 'lucide-react'
import { GAMES, CATEGORIES, categoryById } from '../data/games'
import { Page, PageHeader } from '../components/ui'

const CAT_ICONS = { Snowflake, Zap, Flag, Puzzle, Megaphone, HeartHandshake, Trophy, CloudRain }

const KEY = 'npcc_camp_games_filter'

function loadFilter() {
  try { return localStorage.getItem(KEY) || 'all' } catch { return 'all' }
}

export default function Games() {
  const [filter, setFilterState] = useState(loadFilter)
  function setFilter(f) {
    setFilterState(f)
    try { localStorage.setItem(KEY, f) } catch { /* storage unavailable */ }
  }
  const list = filter === 'all' ? GAMES : GAMES.filter((g) => g.cats.includes(filter))
  const cat = categoryById[filter]

  return (
    <Page>
      <PageHeader eyebrow="Library" title="Games" subtitle={`${GAMES.length} camp games, adapted for NPCC. Pick a category, then open a game for how to run it, safety notes and debrief questions.`} />

      <div className="flex flex-wrap gap-2">
        {[{ id: 'all', label: 'All' }, ...CATEGORIES].map((c) => {
          const n = c.id === 'all' ? GAMES.length : GAMES.filter((g) => g.cats.includes(c.id)).length
          return (
            <button key={c.id} onClick={() => setFilter(c.id)}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold border transition ${filter === c.id ? 'bg-navy text-on-navy border-navy' : 'border-line text-muted hover:text-ink bg-surface'}`}>
              {c.label} · {n}
            </button>
          )
        })}
      </div>

      {cat && <p className="text-sm text-muted mt-4">{cat.blurb}</p>}

      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        {list.map((g) => {
          const main = categoryById[g.cats[0]]
          const Icon = CAT_ICONS[main.icon]
          return (
            <Link key={g.id} to={`/games/${g.id}`} className="card p-5 flex flex-col group hover:-translate-y-0.5 transition">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-navy text-gold"><Icon size={19} /></span>
                <span className="flex items-center gap-1 text-xs font-semibold text-muted"><Clock size={14} /> {g.time.split(' (')[0]}</span>
              </div>
              <h2 className="display uppercase text-2xl mt-3">{g.name}</h2>
              <p className="text-sm text-muted mt-1 flex-1">{g.objective}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {g.cats.map((c) => (
                  <span key={c} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c === 'badweather' ? 'bg-surface-2 text-muted' : 'bg-gold-soft text-ink'}`}>{categoryById[c].label}</span>
                ))}
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">How to run it <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" /></span>
            </Link>
          )
        })}
      </div>
    </Page>
  )
}
