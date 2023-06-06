import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';

import { Button } from './Button';
import { WithTheme } from '../../../../../config/storybook/decorators/WithTheme';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs']
};

// eslint-disable-next-line import/no-default-export -- Allow for stories
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (arg) => <Button {...arg}>Button</Button>
};

export const PrimaryDarkMode: Story = {
  decorators: [WithTheme(Theme.DARK)],
  render: (arg) => <Button {...arg}>Button</Button>
};
