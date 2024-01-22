import Link from 'next/link';

export default function adminLayout({
	children,
	users,
	notifications
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	notifications: React.ReactNode;
}) {
	return (
		<div>
			<nav className="flex gap-5">
				<Link href="/adminpanel" className="text-blue-500">
					Admin
				</Link>
				<Link href="/adminpanel/settings" className="text-blue-500">
					Settings
				</Link>
			</nav>
			{children}
			{users}
			{notifications}
		</div>
	);
}
