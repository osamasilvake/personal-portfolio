'use client';

import { useTranslations } from 'next-intl';

import Button from '@/components/common/button/Button';
import { ButtonVariantEnum } from '@/components/common/button/Button.enum';

import { ProfileType } from './Profile.enum';

const Profile = () => {
	const t = useTranslations('Profile');

	return (
		<div className="w-full lg:w-72">
			<div>
				<p className="pb-3 dark:text-108 text-justify">
					{t('description.intro')} {''}
					<strong className="dark:text-108">{t('description.specialties')}</strong>
				</p>
				<p className="dark:text-108 text-justify">{t('description.passion')}</p>
			</div>

			<div className="pt-12 pb-7">
				<Button
					isDisabled={false}
					variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}
					onClickHandler={() => window.open(ProfileType.GITHUB, '_blank')}>
					{t('button.title')}
				</Button>
			</div>

			<div>
				<div className="flex pb-1">
					<p className="font-bold text-xl dark:text-108 w-28">{t('statistics.years')}</p>
					<p className="font-bold text-xl dark:text-108 w-20">{t('statistics.clientCount')}</p>
					<p className="font-bold text-xl dark:text-108">{t('statistics.satisfactionRate')}</p>
				</div>
				<div className="flex">
					<p className="dark:text-108 text-sm w-28">{t('statistics.experience')}</p>
					<p className="dark:text-108 text-sm w-20">{t('statistics.clients')}</p>
					<p className="dark:text-108 text-sm">{t('statistics.satisfaction')}</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
