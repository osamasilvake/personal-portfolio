import { render, screen, waitFor } from '@testing-library/react';
import { redirect } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';

import RootPage from '../src/app/page';

// Mock the redirect function
vi.mock('next/navigation', () => ({
	redirect: vi.fn()
}));

describe('RootPage', () => {
	it('redirects to /en', async () => {
		render(<RootPage />);
		screen.debug();

		// Wait for the redirect to happen
		await waitFor(() => expect(redirect).toHaveBeenCalledTimes(1));

		// Assert the redirect URL
		expect(redirect).toHaveBeenCalledWith('/en');
	});
});
