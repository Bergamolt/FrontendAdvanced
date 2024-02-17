import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeContextValue = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({})

const THEME_LOCAL_STORAGE_KEY = 'theme'

const defaultTheme =
  (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || Theme.Light

export type ThemeProviderProps = {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export type UseThemeReturn = {
  theme: Theme
  toggleTheme: () => void
}

function useTheme(): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light

    setTheme(newTheme)
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}

export { ThemeProvider, useTheme }
