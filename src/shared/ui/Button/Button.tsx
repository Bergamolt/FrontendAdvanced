import { ButtonHTMLAttributes } from 'react'
import cx from 'classyfier'
import classes from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  mode?: 'outlined'
}

export function Button(props: ButtonProps) {
  const { className, mode, size = 'large', ...otherProps } = props

  return (
    <button
      data-testid='button'
      className={cx(classes.root, classes[mode], classes[size], className)}
      {...otherProps}
    />
  )
}
