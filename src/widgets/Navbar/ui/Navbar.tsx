import cx from 'classyfier'
import classes from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePaths } from 'shared/config/routeConfig'

type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const { className } = props

  return (
    <div className={cx(classes.root, className)}>
      <AppLink to={RoutePaths.main}>Home</AppLink>
      <AppLink to={RoutePaths.about}>About</AppLink>
    </div>
  )
}
