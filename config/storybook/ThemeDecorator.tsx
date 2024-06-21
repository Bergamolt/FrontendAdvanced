import { StoryFn } from '@storybook/react'

export const ThemeDecorator = (Story: StoryFn) => (
  <div className='app light'>
    <Story />
  </div>
)
