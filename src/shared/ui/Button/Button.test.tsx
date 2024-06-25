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

  it('renders a button element with small size', () => {
    render(<Button size='small'>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.classList).toContain('small')
  })

  it('renders a button element with medium size', () => {
    render(<Button size='medium'>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.classList).toContain('medium')
  })

  it('renders a button element with large size', () => {
    render(<Button size='large'>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.classList).toContain('large')
  })

  it('renders a button element with xlarge size', () => {
    render(<Button size='xlarge'>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.classList).toContain('xlarge')
  })

  it('renders a button element with outlined mode', () => {
    render(<Button mode='outlined'>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button.classList).toContain('outlined')
  })
})
