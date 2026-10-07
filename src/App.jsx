import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProgressProvider } from './components/ProgressProvider'
import AppShell from './components/AppShell'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Module from './pages/Module'
import Practice from './pages/Practice'
import FlashCards from './pages/FlashCards'
import Scenarios from './pages/Scenarios'
import Scenario from './pages/Scenario'

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Home />} />
            <Route path="learn" element={<Learn />} />
            <Route path="learn/:id" element={<Module />} />
            <Route path="practice" element={<Practice />} />
            <Route path="practice/flashcards" element={<FlashCards />} />
            <Route path="practice/scenarios" element={<Scenarios />} />
            <Route path="practice/scenarios/:id" element={<Scenario />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  )
}
