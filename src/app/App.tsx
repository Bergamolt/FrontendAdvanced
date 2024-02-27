import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import cx from 'classyfier'
import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { useTheme } from 'app/providers/ThemeProvider'
import './styles/index.scss'


export function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cx('app', theme)}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
