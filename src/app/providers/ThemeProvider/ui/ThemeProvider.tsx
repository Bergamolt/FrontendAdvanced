import { ReactNode, useMemo, useState } from 'react'
import { THEME_LOCAL_STORAGE_KEY } from '../lib/constant'
import { Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme =
  (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || Theme.Light

export type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
