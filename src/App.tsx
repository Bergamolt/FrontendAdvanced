import { Suspense, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import cx from 'classyfier'
import { HomePageAsync } from './pages/Home'
import { AboutPageAsync } from './pages/About'
import './styles/index.scss'
import { useTheme } from './theme/context'

export function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cx('app', theme)}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path='/' element={<HomePageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
