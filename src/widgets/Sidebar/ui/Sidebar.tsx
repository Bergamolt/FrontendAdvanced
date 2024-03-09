import cx from 'classyfier'
import classes from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import { useState } from 'react'

type NavbarProps = {
  className?: string
}

export function Sidebar(props: NavbarProps) {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => setCollapsed(!collapsed)

  return (
    <div className={cx(classes.root, collapsed && classes.collapsed, className)}>
      <Button className={classes.button} onClick={handleToggle}>Toggle</Button>
      <ThemeSwitcher />
    </div>
  )
}
