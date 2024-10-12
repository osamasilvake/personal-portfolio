import { vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RootPage from '../src/app/page';
import { redirect } from 'next/navigation';

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
