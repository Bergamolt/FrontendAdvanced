import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <div>
      <Button onClick={toggle}>
        {i18n.language === 'en' ? t('Русский') : t('English')}
      </Button>
    </div>
  )
}
