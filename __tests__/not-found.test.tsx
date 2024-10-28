import { render, screen } from '@testing-library/react';

import NotFound from '../src/app/not-found';

test('renders NotFound component with correct message', () => {
	render(<NotFound />);
	expect(screen.getByTestId('msg-container')).toHaveTextContent('Something went wrong!');
});
