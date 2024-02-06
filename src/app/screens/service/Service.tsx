import Image from 'next/image';

import { ServiceList } from './Service.list';

const Service = () => {
	return (
		<div className="w-full pl-4 pt-8 lg:pt-0 lg:w-60">
			<h2 className="font-bold text-xl">Service</h2>
			{ServiceList?.map((service, index) => (
				<div key={index} className="pt-5">
					<div className="flex items-center gap-3 pb-2">
						<Image src={service.image} alt="web" className="w-12 h-12" />
						<p className="font-bold">{service.title}</p>
					</div>
					<p className="text-sm text-gray-400 pl-1">{service.description}</p>
				</div>
			))}
		</div>
	);
};

export default Service;
