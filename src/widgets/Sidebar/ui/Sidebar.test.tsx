import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { ComponentRender } from 'shared/jest/ComponentRender'

describe('Sidebar', () => {
  it('renders the Sidebar component', () => {
    render(
      <ComponentRender>
        <Sidebar />
      </ComponentRender>
    )

    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInstanceOf(HTMLElement)
  })

  it('toggles the collapsed state when the button is clicked', () => {
    render(
      <ComponentRender>
        <Sidebar />
      </ComponentRender>
    )
    const button = screen.getByTestId('toggle-button')
    const sidebar = screen.getByTestId('sidebar')

    expect(sidebar.className).not.toContain('collapsed')

    fireEvent.click(button)

    expect(sidebar.className).toContain('collapsed')

    fireEvent.click(button)

    expect(sidebar.className).not.toContain('collapsed')
  })
})
