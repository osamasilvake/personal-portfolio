import Link from 'next/link';

const Folder1 = () => {
	return (
		<div>
			<h1>Folder 1</h1>
			<Link href="/folder1/folder2" className="text-blue-500 underline">
				Folder2
			</Link>
		</div>
	);
};

export default Folder1;
