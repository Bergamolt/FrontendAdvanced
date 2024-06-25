import cx from 'classyfier'
import { IoIosArrowBack, IoIosHome, IoMdPaper } from 'react-icons/io'
import classes from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useState } from 'react'
import LanguageSwitcher from 'widgets/LanguageSwitcher/ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import { RoutePaths } from 'shared/config/routeConfig'
import { AppLink } from 'shared/ui/AppLink'

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
      data-testid='sidebar'
      className={cx(classes.root, collapsed && classes.collapsed, className)}
    >
      <Button
        data-testid='toggle-button'
        className={classes.toggle}
        onClick={handleToggle}
      >
        <IoIosArrowBack size={24} />
      </Button>

      <div className={classes.items}>
        <AppLink className={classes.item} to={RoutePaths.main}>
          <IoIosHome size={24} />
          <span>{t('Home')}</span>
        </AppLink>
        <AppLink className={classes.item} to={RoutePaths.about}>
          <IoMdPaper size={24} />
          <span>{t('About')}</span>
        </AppLink>
      </div>

      <div className={classes.bottom}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
