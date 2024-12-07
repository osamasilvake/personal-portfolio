'use client';

import { useTranslations } from 'next-intl';

import Button from '@/components/common/button/Button';
import { ButtonVariantEnum } from '@/components/common/button/Button.enum';

import { ProfileType } from './Profile.enum';

const Profile = () => {
	const t = useTranslations('Profile');

	const emailAddress = ProfileType.EMAIL;
	const mailtoLink = `mailto:${emailAddress}`;

	return (
		<div className="w-full lg:w-72">
			<div aria-labelledby="profile-introduction">
				<h2 id="profile-introduction" className="sr-only">
					Profile Introduction
				</h2>
				<p className="mb-3 dark:text-108 text-justify">
					{t('description.intro')}
					<strong className="dark:text-108">{t('description.specialties')}</strong>
				</p>
				<p className="dark:text-108 text-justify">{t('description.passion')}</p>
			</div>

			<div className="mt-12 mb-12">
				<Button
					label="button"
					isDisabled={false}
					variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}
					onClickHandler={() => (window.location.href = mailtoLink)}>
					{t('button.title')}
				</Button>
			</div>

			<div className="flex gap-5" aria-label="profile-statistics">
				<div>
					<h2 className="font-bold text-xl dark:text-108 w-28">{t('statistics.years')}</h2>
					<p className="dark:text-108 pt-1 text-sm w-28">{t('statistics.experience')}</p>
				</div>
				<div>
					<h2 className="font-bold text-xl dark:text-108">{t('statistics.satisfactionRate')}</h2>
					<p className="dark:text-108 pt-1 text-sm">{t('statistics.satisfaction')}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
