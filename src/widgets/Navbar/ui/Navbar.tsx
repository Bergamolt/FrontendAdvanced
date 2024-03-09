import cx from 'classyfier'
import classes from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'

type NavbarProps = {
  className?: string
}

export function Navbar(props: NavbarProps) {
  const { className } = props

  return (
    <div className={cx(classes.root, className)}>
      <AppLink to='/'>Home</AppLink>
      <AppLink to='/about'>About</AppLink>
    </div>
  )
}
