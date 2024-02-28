import { ServiceList } from './Service.list';

const Service = () => {
	return (
		<div className="w-full pt-8 lg:pt-0 lg:w-72 xl:pr-2 ">
			<h2 className="font-bold text-xl">Service</h2>
			{ServiceList?.map((service, index) => (
				<div key={index} className="pt-9">
					<div className="flex items-center gap-3">
						<service.Icon className={`${service.size}`} />
						<p className="font-bold">{service.title}</p>
					</div>
					<p className="pl-1 pt-1">{service.description}</p>
				</div>
			))}
		</div>
	);
};

export default Service;
