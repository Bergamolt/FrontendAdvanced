import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'
import { THEME_LOCAL_STORAGE_KEY } from './constant'

export type UseThemeReturn = {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeReturn {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light

    setTheme(newTheme)
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
