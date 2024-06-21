/** @type { import('@storybook/react').Preview } */
import '../../src/app/styles/index.scss'
import { ThemeDecorator } from './ThemeDecorator'
import { RouterDecorator } from './RouterDecorator'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator, RouterDecorator],
}

export default preview
