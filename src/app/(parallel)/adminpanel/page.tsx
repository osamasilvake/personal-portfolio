'use client';

import { useRouter } from 'next/navigation';

const AdminPanel = () => {
	const router = useRouter();
	return (
		<div>
			<h1>AdminPanel</h1>
			<button type="button" onClick={() => router.push('/login')}>
				Login
			</button>
		</div>
	);
};

export default AdminPanel;
