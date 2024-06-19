import { AboutPage } from 'pages/About'
import { HomePage } from 'pages/Home'
import { NotFoundPage } from 'pages/NotFound'
import { RouteProps } from 'react-router-dom'

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePaths[AppRoute.MAIN],
    element: <HomePage />,
  },
  [AppRoute.ABOUT]: {
    path: RoutePaths[AppRoute.ABOUT],
    element: <AboutPage />,
  },
  [AppRoute.NOT_FOUND]: {
    path: RoutePaths[AppRoute.NOT_FOUND],
    element: <NotFoundPage />,
  },
}
