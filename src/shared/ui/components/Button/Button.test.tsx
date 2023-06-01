import { render, fireEvent } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick prop when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );

    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct theme class', () => {
    const { container } = render(
      <Button theme={ThemeButton.CLEAR}>Click me</Button>
    );

    expect(container.firstChild).toHaveClass('clear');
  });
});
