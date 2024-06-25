import cx from 'classyfier'
import classes from './Navbar.module.scss'
// import { AppLink } from 'shared/ui/AppLink'
// import { RoutePaths } from 'shared/config/routeConfig'
// import { useTranslation } from 'react-i18next'

type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const { className } = props
  // const { t } = useTranslation()

  return <div className={cx(classes.root, className)}></div>
}
