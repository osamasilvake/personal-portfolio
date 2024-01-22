import { delay } from '@/lib/utils';

export default async function notificationsMessage() {
	await delay(2000);
	return <div>NotificationsMessage</div>;
}
