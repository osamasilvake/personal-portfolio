const Post = ({ params }: { params: { id: string } }) => {
	return <div>{params.id}</div>;
};

export default Post;
