import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string',
      control: 'text',
      description: 'Button text'
    },
    onClick: {
      type: 'function',
      action: 'onClick'
    },
    onAuxClick: {
      type: 'function',
      action: 'onAuxClick'
    },
    disabled: {
      type: 'boolean'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    disabled: true
  }
};
