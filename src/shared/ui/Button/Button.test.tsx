import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('renders a button element', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.textContent).toBe('Click me')
  })

  it('renders a button element with custom class', () => {
    render(<Button className='custom-class'>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.classList).toContain('custom-class')
  })

  it('renders a button element with click handler', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button')

    button.click()

    expect(handleClick).toHaveBeenCalled()
  })
})
