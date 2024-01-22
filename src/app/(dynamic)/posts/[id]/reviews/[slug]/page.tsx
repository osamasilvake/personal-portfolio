const Review = ({ params }: { params: { slug: string } }) => {
	return <div>Review:{params.slug}</div>;
};

export default Review;
