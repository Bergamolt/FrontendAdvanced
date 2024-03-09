import cx from 'classyfier'
import Icon from 'app/icons/brightness.svg'
import { useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button'
import classes from './ThemeSwitcher.module.scss'

type ThemeSwitcherProps = {
  className?: string
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props
  const { toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} className={cx(classes.root, className)}>
      <Icon width={32} height={32} />
    </Button>
  )
}
