import { createContext } from 'react'

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeContextValue = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue>({})
