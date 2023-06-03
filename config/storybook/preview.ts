import { type Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(?<temp1>background|color)$/i,
        date: /Date$/
      }
    }
  }
};

// eslint-disable-next-line import/no-default-export -- Allow in this file
export default preview;
