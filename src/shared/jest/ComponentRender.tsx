import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/i18n/config/configForTests'

type ComponentRenderProps = {
  children: ReactNode
}

export function ComponentRender({ children }: ComponentRenderProps) {
  return (
    <MemoryRouter basename='/'>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </MemoryRouter>
  )
}
