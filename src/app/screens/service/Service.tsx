import { ServiceList } from './Service.list';

const Service = () => {
	return (
		<div className="w-full pt-8 lg:pt-0 lg:w-72">
			<h2 className="text-xl xl:text-2xl pb-7 dark:text-stone-300" tabIndex={0}>
				Service
			</h2>
			{ServiceList?.map((service, index) => (
				<div key={index} className="pr-1 pb-9" tabIndex={0}>
					<div className="flex items-center gap-3">
						<service.Icon className={`${service.size}`} />
						<h3 className="font-bold dark:text-stone-200">{service.title}</h3>
					</div>
					<p className="pl-1 pt-1 dark:text-stone-300 text-justify">{service.description}</p>
				</div>
			))}
		</div>
	);
};

export default Service;
