import NotFound from '../src/app/not-found';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('renders NotFound component with correct message', () => {
	render(<NotFound />);
	expect(screen.getByTestId('msg-container')).toHaveTextContent('Something went wrong!');
});
