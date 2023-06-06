import { type Decorator } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProviders';
import { type Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';

export const WithTheme =
  (theme: Theme): Decorator =>
  (Story) =>
    (
      <ThemeProvider>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
