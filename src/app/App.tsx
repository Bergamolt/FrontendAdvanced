import cx from 'classyfier'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import AppRouter from './router'
import './styles/index.scss'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={cx('app', theme)}>
      <Navbar />
      <main className='app-content'>
        <Sidebar />
        <div className='app-content-wrapper'>
          <AppRouter />
        </div>
      </main>
    </div>
  )
}
