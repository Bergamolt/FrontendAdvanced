import { useTranslation } from 'react-i18next'
import classes from './NotFound.module.scss'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <h1>{t('Not found page')}</h1>
    </div>
  )
}
