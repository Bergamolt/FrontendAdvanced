import { ButtonHTMLAttributes } from 'react'
import cx from 'classyfier'
import classes from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'outlined'
}

export function Button(props: ButtonProps) {
  const { className, mode, ...otherProps } = props

  return (
    <button
      data-testid='button'
      className={cx(classes.root, classes[mode], className)}
      {...otherProps}
    />
  )
}
