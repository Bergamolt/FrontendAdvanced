import { AboutPage } from 'pages/About'
import { HomePage } from 'pages/Home'
import { RouteProps } from 'react-router-dom'

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
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
}
