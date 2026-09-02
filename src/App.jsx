import { useEffect, useState } from 'react'
import { useLanguage } from './i18n/LanguageContext'
import { useProgress } from './data/progressStore.js'
import TopBar from './components/TopBar'
import LoginScreen from './components/LoginScreen.jsx'
import LearnerView from './views/LearnerView'
import AdminView from './views/AdminView'

export default function App() {
  const { t } = useLanguage()
  const { learner, isLoggedIn } = useProgress()
  const [view, setView] = useState('learner')
  const tabBase = 'flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors '
  const canSeeAdmin = isLoggedIn && learner.role === 'admin'

  useEffect(() => {
    if (view === 'admin' && !canSeeAdmin) {
      setView('learner')
    }
  }, [view, canSeeAdmin])

  return (
    <div className="flex min-h-dvh flex-col bg-cream font-body text-navy print:bg-white">
      <TopBar />
      {!isLoggedIn ? (
        <LoginScreen />
      ) : (
        <>
          <nav className="mx-auto flex w-full max-w-screen-sm gap-2 px-4 pt-4 sm:max-w-screen-md sm:px-6 print:hidden">
            <button
              type="button"
              onClick={() => setView('learner')}
              className={tabBase + (view === 'learner' ? 'bg-navy text-white' : 'bg-white text-navy')}
            >
              {t('navLearner')}
            </button>
            {canSeeAdmin && (
              <button
                type="button"
                onClick={() => setView('admin')}
                className={tabBase + (view === 'admin' ? 'bg-navy text-white' : 'bg-white text-navy')}
              >
                {t('navAdmin')}
              </button>
            )}
          </nav>
          {view === 'admin' && canSeeAdmin ? <AdminView /> : <LearnerView />}
        </>
      )}
    </div>
  )
}
