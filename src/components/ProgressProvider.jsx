import { useState, useCallback } from 'react'
import { ProgressContext } from '../hooks/useProgress'

const KEY = 'npcc_camp_facilitation'

const defaults = () => ({
  modules: {},     // { [moduleId]: true } — module marked as read
  flashcards: {},  // { [cardId]: 'known' | 'review' }
  scenarios: {},   // { [scenarioId]: { notes: {[promptId]: string}, done } }
})

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...defaults(), ...JSON.parse(raw) } : defaults()
  } catch {
    return defaults()
  }
}

function save(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)) } catch { /* storage unavailable: keep in memory */ }
}

function useProgressState() {
  const [progress, setProgress] = useState(load)

  const update = useCallback((updater) => {
    setProgress((prev) => {
      const next = updater(prev)
      save(next)
      return next
    })
  }, [])

  const api = {
    progress,
    markModuleRead: useCallback((id) => update((p) => ({ ...p, modules: { ...p.modules, [id]: true } })), [update]),
    markFlashcard: useCallback((id, status) => update((p) => ({ ...p, flashcards: { ...p.flashcards, [id]: status } })), [update]),
    resetFlashcards: useCallback(() => update((p) => ({ ...p, flashcards: {} })), [update]),
    saveScenario: useCallback((id, notes, done) => update((p) => ({
      ...p, scenarios: { ...p.scenarios, [id]: { notes, done } },
    })), [update]),
    resetAll: useCallback(() => { const fresh = defaults(); save(fresh); setProgress(fresh) }, []),
  }
  return api
}

export function ProgressProvider({ children }) {
  const api = useProgressState()
  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
}
