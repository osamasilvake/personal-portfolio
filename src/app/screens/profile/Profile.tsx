import Button from '@/components/common/button/Button';

const Profile = () => {
	return (
		<div className="md:w-72">
			<h3 className="pb-7 font-bold text-xl">Web Specialist base in pak</h3>
			<p className="pb-4 text-gray-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestiae recusandae minus quas
			</p>
			<p className="text-gray-400">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio impedit perferendis rem?
			</p>
			<div className="pt-6 pb-9">
				<Button />
			</div>
			<div className="flex flex-col gap-3 w-60">
				<div className="flex gap-8">
					<p className="font-bold text-xl">1 Years</p>
					<p className="font-bold text-xl">25+</p>
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
