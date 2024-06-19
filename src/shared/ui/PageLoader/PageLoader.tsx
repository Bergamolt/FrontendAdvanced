import { Loader } from 'shared/ui/Loader'
import classes from './PageLoader.module.scss'

export function PageLoader() {
  return (
    <div className={classes.root}>
      <Loader />
    </div>
  )
}
