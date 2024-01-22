import Link from 'next/link';

const Posts = () => {
	const posts = [
		{ id: '1', title: 'Post 1' },
		{ id: '2', title: 'Post 2' },
		{ id: '3', title: 'Post 3' }
	];

	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<h1>{post.title}</h1>
						</Link>
					</li>
				))}
			</ul>
			{/* <ul>
				<li>
					<Link href="/posts/1">Post 1</Link>
				</li>
				<li>
					<Link href="/posts/2">Post 2</Link>
				</li>
				<li>
					<Link href="/posts/3">Post 3</Link>
				</li>
			</ul> */}
		</div>
	);
};

export default Posts;
