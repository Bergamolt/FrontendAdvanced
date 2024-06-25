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
  underline?: boolean
}

export function AppLink(props: AppLinkProps) {
  const { theme = AppLinkTheme.LIGHT, className, ...otherProps } = props

  return (
    <Link
      style={{
        textDecoration: props.underline ? 'underline' : 'none',
      }}
      {...otherProps}
      className={cx(classes[theme], className)}
    />
  )
}
