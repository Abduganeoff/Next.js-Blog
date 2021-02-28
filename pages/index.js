import Link from 'next/link';
import axios from 'axios';
const Index = ({ posts }) => {
	return (
		<div>
			<h1>Home Page!</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link
							href={`/post?id=${post.id}`}
							as={`/p/${post.id}`}
						>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

Index.getInitialProps = async () => {
	const res = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	const { data } = res;
	return { posts: data };
};

export default Index;
