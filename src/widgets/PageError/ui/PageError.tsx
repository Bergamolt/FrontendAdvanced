import { useTranslation } from 'react-i18next'
import classes from './PageError.module.scss'

export function PageError() {
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <h1>{t('Page Error')}</h1>
    </div>
  )
}
