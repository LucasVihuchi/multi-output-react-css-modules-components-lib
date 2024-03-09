import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});
