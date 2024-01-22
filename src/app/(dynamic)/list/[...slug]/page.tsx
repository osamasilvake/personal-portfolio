const ListItem = ({ params }: { params: { slug: string[] } }) => {
	return <h1>List : {params.slug}</h1>;
};

export default ListItem;
