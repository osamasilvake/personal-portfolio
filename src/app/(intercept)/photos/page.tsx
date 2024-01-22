import Image from 'next/image';
import Link from 'next/link';

const photos = [
	{
		id: '1',
		name: 'Kevin Canlas',
		href: 'https://twitter.com/kvncnls/status/1471832344986324998',
		username: '@kvncnls',
		imageSrc: 'https://pbs.twimg.com/media/FGz_t1wXIAIFyT-?format=jpg'
	},
	{
		id: '2',
		name: 'Pedro Duarte',
		href: 'https://twitter.com/peduarte/status/1463897468383412231',
		username: '@peduarte',
		imageSrc: 'https://pbs.twimg.com/media/FFDOtLkWYAsWjTM?format=jpg'
	},
	{
		id: '3',
		name: 'Ahmad Awais',
		href: 'https://twitter.com/MrAhmadAwais/status/1338151679083032577',
		username: '@MrAhmadAwais',
		imageSrc: 'https://pbs.twimg.com/media/EpIR281XIAMUrEM?format=jpg'
	},
	{
		id: '4',
		name: 'Leandro Soengas',
		href: 'https://twitter.com/lsoengas/status/1352302741339693061',
		username: '@lsoengas',
		imageSrc: 'https://pbs.twimg.com/media/EsRYK8oWMAEkObV?format=jpg'
	},
	{
		id: '5',
		name: 'Samina',
		href: 'https://twitter.com/saminacodes/status/1466479548837482497',
		username: '@saminacodes',
		imageSrc: 'https://pbs.twimg.com/media/FFn7X76VgAEVTgs?format=jpg'
	},
	{
		id: '7',
		name: '山岸和利💛',
		href: 'https://twitter.com/ykzts/status/1426358452356407297',
		username: '@ykzts',
		imageSrc: 'https://pbs.twimg.com/media/E8txb2yVkAQxRVw?format=jpg'
	},
	{
		id: '8',
		name: 'Altngelo',
		href: 'https://twitter.com/AfterDarkAngelo/status/1456372859090075648',
		username: '@AfterDarkAngelo',
		imageSrc: 'https://pbs.twimg.com/media/FDYTZN1VIAAT-X1?format=jpg'
	},
	{
		id: '9',
		name: 'Matias Baldanza',
		href: 'https://twitter.com/matiasbaldanza/status/1404834163203715073',
		username: '@matiasbaldanza',
		imageSrc: 'https://pbs.twimg.com/media/E374pyaWEAMCT2R?format=jpg'
	}
];

const Photos = () => {
	return (
		<div>
			<section className="mt-12 mb-6 mx-10">
				<div>
					<h1 className="text-3xl font-bold text-gray-700">Photos</h1>

					<ul className="grid mt-10 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
						{photos.map(({ id, imageSrc }) => (
							<li key={id}>
								<Link href={`/photos/${id}`}>
									<Image
										alt=""
										src={imageSrc}
										height={500}
										width={500}
										className="aspect-square w-full rounded-md object-cover"
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Photos;
