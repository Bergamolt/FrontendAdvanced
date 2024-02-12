import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { HomePageAsync } from './pages/Home'
import { AboutPageAsync } from './pages/About'
import './styles/index.scss'

export function App() {
  return (
    <div className='app light'>
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
