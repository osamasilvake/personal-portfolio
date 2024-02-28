'use client';
import Link from 'next/link';

import Button from '@/components/common/button/Button';
import { ButtonVariantEnum } from '@/components/common/button/Button.enum';

import { ProfileType } from './Profile.enum';

const Profile = () => {
	const handleClick = () => {
		alert('clicked');
	};

	return (
		<div className="w-full lg:w-72 xl:pl-2">
			<h3 className="pb-7 font-bold text-xl">Web Specialist base in pak</h3>
			<p className="pb-4">
				I am a self-taught front end developer from Pakistan, specializing in <strong>React</strong>,
				<strong>Next.js</strong>, and <strong>Typescript</strong>.
			</p>
			<p>I&apos;m passionate about building cool websites and I love sharing the things I learn with my audience.</p>
			<div className="pt-8 pb-7">
				<Button borderClass="border-2" variant={ButtonVariantEnum.OUTLINED_IN_DEFAULT}>
					<Link href={ProfileType.GITHUB} target="_blank">
						Hire me
					</Link>
				</Button>
				<Button
					borderClass="border"
					paddingClass="px-7 py-2"
					onClickHandler={handleClick}
					isDisabled={true}
					variant={ButtonVariantEnum.OUTLINED_IN_PURPLE}>
					Post
				</Button>
			</div>
			<div className="flex flex-col gap-3 w-60">
				<div className="flex gap-8">
					<p className="font-bold text-xl">1 Years</p>
					<p className="font-bold text-xl">15+</p>
					<p className="font-bold text-xl">98.8%</p>
				</div>
				<div className="flex gap-6">
					<p className="text-gray-400 text-sm">Experience</p>
					<p className="text-gray-400 text-sm pl-1">Clients</p>
					<p className="text-gray-400 text-sm">Satisfaction</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
