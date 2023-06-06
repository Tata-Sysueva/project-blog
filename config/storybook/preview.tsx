import { type Preview } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';

import { WithI18n } from './decorators/WithI18n';
import { WithTheme } from './decorators/WithTheme';
import '../../src/app/styles/index.scss';

export * from './globals';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [WithTheme(Theme.LIGHT), WithI18n]
};

// eslint-disable-next-line import/no-default-export -- Allow in this file
export default preview;
