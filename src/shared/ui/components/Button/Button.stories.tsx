import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

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

// export const Secondary: Story = {
//   render: (arg) => (
//     <Button theme={ThemeButton.OUTLINE} {...arg}>Button with Theme Outline</Button>
//   )
// };

// export const Disabled: Story = {
//   render: (arg) => <Button disabled >Button disabled</Button>
// };
