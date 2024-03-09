import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import cx from 'classyfier'
import { useTheme } from 'app/providers/ThemeProvider'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import './styles/index.scss'


export function App() {
  const { theme } = useTheme()

  return (
    <div className={cx('app', theme)}>
      <Navbar />
      <ThemeSwitcher />
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
