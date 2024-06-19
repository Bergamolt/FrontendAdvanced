import cx from 'classyfier'
import classes from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import { useState } from 'react'
import LanguageSwitcher from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

type NavbarProps = {
  className?: string
}

export function Sidebar(props: NavbarProps) {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const handleToggle = () => setCollapsed(!collapsed)

  return (
    <div
      className={cx(classes.root, collapsed && classes.collapsed, className)}
    >
      <Button className={classes.button} onClick={handleToggle}>
        {t('Toggle')}
      </Button>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}
