import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import i18n from 'shared/i18n/config/configForTests'
import { I18nextProvider } from 'react-i18next'

describe('Sidebar', () => {
  it('renders the Sidebar component', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Sidebar />)
      </I18nextProvider>
    )

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInstanceOf(HTMLElement)
  })

  it('toggles the collapsed state when the button is clicked', () => {
    render(<Sidebar />)
    const button = screen.getByTestId('toggle-button')
    const sidebar = screen.getByTestId('sidebar')

    expect(sidebar.className).not.toContain('collapsed')

    fireEvent.click(button)

    expect(sidebar.className).toContain('collapsed')

    fireEvent.click(button)

    expect(sidebar.className).not.toContain('collapsed')
  })
})
