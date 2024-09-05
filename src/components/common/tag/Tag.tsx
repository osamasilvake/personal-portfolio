import { TagProps } from './Tag.interface';

const Tag = ({ items }: TagProps) => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<span
						key={index}
						className="inline-block text-sm font-light text-106 dark:text-108 px-2 mr-1 mb-2 py-1 rounded-md bg-105 dark:bg-106">
						{item}
					</span>
				);
			})}
		</div>
	);
};

export default Tag;
