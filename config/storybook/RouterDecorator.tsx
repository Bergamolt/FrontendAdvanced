import { StoryFn } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

export const RouterDecorator = (Story: StoryFn) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
)
