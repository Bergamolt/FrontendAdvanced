import { ButtonHTMLAttributes } from 'react'
import cx from 'classyfier'
import classes from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  const { className, ...otherProps } = props

  return <button className={cx(classes.root, className)} {...otherProps} />
}
