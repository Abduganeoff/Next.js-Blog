import axios from 'axios';

const Post = ({ id, comments }) => {
	return (
		<div>
			<h1>You are looking at #{id}</h1>
			{comments.map((comment) => (
				<Comment {...comment} key={comment.id} />
			))}
		</div>
	);
};

const Comment = ({ email, body }) => {
	return (
		<div>
			<h5>{email}</h5>
			<p>{body}</p>
		</div>
	);
};

Post.getInitialProps = async ({ query }) => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`
	);
	const { data } = res;
	console.log(data);
	return { ...query, comments: data };
};

export default Post;
