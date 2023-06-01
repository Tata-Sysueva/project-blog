import { fireEvent, screen } from '@testing-library/react';
import { t } from 'i18next';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { Button, ThemeButton } from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    renderWithTranslation(<Button>{t('general_actions:toggle')}</Button>);

    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('calls onClick prop when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = renderWithTranslation(
      <Button onClick={handleClick}>{t('general_actions:toggle')}</Button>
    );

    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct theme class', () => {
    const { container } = renderWithTranslation(
      <Button theme={ThemeButton.CLEAR}>{t('general_actions:toggle')}</Button>
    );

    expect(container.firstChild).toHaveClass('clear');
  });
});
