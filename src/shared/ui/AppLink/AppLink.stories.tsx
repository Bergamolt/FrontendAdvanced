import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  args: {
    to: '/',
  },
}

export default meta

type Story = StoryObj<typeof AppLink>

export const Light: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.LIGHT,
  },
}

export const Dark: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.DARK,
  },
}
