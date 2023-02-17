import { render, screen } from '@testing-library/react';

import { Example } from '.';

describe('<Example />', () => {
  it('renders Example component', () => {
    render(<Example />);

    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
