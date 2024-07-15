interface Props {
	items: string[];
}
const Tag = ({ items }: Props) => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<span
						key={index}
						className="inline-block text-[.9375rem] font-light text-[#212121] dark:text-[#6a6c6d] px-2 mr-1 mb-1 py-1 rounded-[4px] bg-[#f2f5fa] dark:bg-[#212121]">
						{item}
					</span>
				);
			})}
		</div>
	);
};

export default Tag;
