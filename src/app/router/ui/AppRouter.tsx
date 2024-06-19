import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />
        })}
      </Routes>
    </Suspense>
  )
}
