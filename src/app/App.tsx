import { Suspense } from 'react'
import cx from 'classyfier'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import AppRouter from './router'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'

export function App() {
  const { theme } = useTheme()

  return (
    <Suspense fallback='loading...'>
      <div className={cx('app', theme)}>
        <Navbar />
        <main className='app__content'>
          <Sidebar />
          <div className='app__wrapper'>
            <AppRouter />
          </div>
        </main>
      </div>
    </Suspense>
  )
}
