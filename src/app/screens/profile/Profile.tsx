'use client';

import Button from '@/components/common/button/Button';
import { ButtonVariantEnum } from '@/components/common/button/Button.enum';

import { ProfileType } from './Profile.enum';

const Profile = () => {
	return (
		<div className="w-full lg:w-72">
			<h2
				className="pb-7 text-xl xl:text-2xl dark:text-stone-200"
				tabIndex={0}
				aria-label="Web Specialist base in pakistan">
				Web Specialist base in pak
			</h2>
			<div>
				<p className="pb-3 dark:text-stone-300 text-justify">
					I am a self-taught front end developer from Pakistan, specializing in{' '}
					<strong className="dark:text-stone-200">React</strong>,
					<strong className="dark:text-stone-200">Next js</strong>, and{' '}
					<strong className="dark:text-stone-200">Typescript</strong>.
				</p>
				<p className="dark:text-stone-300 text-justify">
					I&apos;m passionate about building cool websites and I love sharing the things I learn with my audience.
				</p>
			</div>

			<div className="pt-8 pb-7">
				<Button
					isDisabled={false}
					variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}
					onClickHandler={() => window.open(ProfileType.GITHUB, '_blank')}>
					Hire me
				</Button>
			</div>

			<div>
				<div className="flex gap-9 pb-3">
					<p className="font-bold text-xl dark:text-stone-200" tabIndex={0}>
						1 Years
					</p>
					<p className="font-bold text-xl dark:text-stone-200" tabIndex={0}>
						15+
					</p>
					<p className="font-bold text-xl dark:text-stone-200 pl-1" tabIndex={0}>
						98.8%
					</p>
				</div>
				<div className="flex gap-7">
					<p className="dark:text-stone-300 text-sm">Experience</p>
					<p className="dark:text-stone-300 text-sm pl-2">Clients</p>
					<p className="dark:text-stone-300 text-sm pl-2">Satisfaction</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
