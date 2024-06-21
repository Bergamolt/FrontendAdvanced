import { Link, LinkProps } from 'react-router-dom'
import cx from 'classyfier'
import classes from './AppLink.module.scss'

export enum AppLinkTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme
  className?: string
}

export function AppLink(props: AppLinkProps) {
  const { theme = AppLinkTheme.LIGHT, className, ...otherProps } = props

  return <Link {...otherProps} className={cx(classes[theme], className)} />
}
