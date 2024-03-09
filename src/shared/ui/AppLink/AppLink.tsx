import { Link, LinkProps } from 'react-router-dom'
import cx from 'classyfier'
import classes from './AppLink.module.scss'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface AppLinkProps extends LinkProps {
  theme?: Theme
  className?: string
}

export function AppLink(props: AppLinkProps) {
  const { theme = Theme.LIGHT, className, ...otherProps } = props

  return <Link {...otherProps} className={cx(classes[theme], className)} />
}
