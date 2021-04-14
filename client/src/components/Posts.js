import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import axios from 'axios';
import { formatDate } from './helpers/formatDate';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	//This function will be passed down to child component as prop, so when such item sends request to get deleted on the DB, it'll automatically be shown on the front
	function loadList() {
		axios.get(' http://localhost:5000/posts').then(({ data: { posts } }) => {
			setPosts(posts);
			setLoading(false);
		});
	}

	function refreshList() {
		setLoading(true);
		axios.get(' http://localhost:5000/posts/refresh').then(() => {
			setTimeout(loadList, 1000); //could be better handled with SSE
		});
	}

	useEffect(() => {
		loadList();
	}, []);

	let postslists = posts.map((post) => (
		<PostItem
			onDelete={loadList}
			key={post.objectID}
			postID={post.objectID}
			postTitle={post.title}
			postUser={post.author}
			postDate={formatDate(post.creationDate)}
			postUrl={post.url}
		/>
	));

	if (loading) {
		return (
			<div className='post-component message'>
				<h1 className='loading-msg'>(((Loading)))</h1>
			</div>
		);
	}
	if (posts.length > 0) {
		return <ul className='post-component posts-list'>{postslists}</ul>;
	}
	return (
		<div className='post-component message'>
			<h1>There are no posts to show</h1>
			<button className='btn-refresh' onClick={refreshList}>
				Refresh
			</button>
		</div>
	);
}

export default Posts;
