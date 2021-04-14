import React from 'react';
import axios from 'axios';

const PostItem = ({
	onDelete,
	postID,
	postTitle,
	postUser,
	postDate,
	postUrl,
	postUnwanted,
}) => {
	const deleteStory = () => {
		axios
			.delete(`http://localhost:5000/posts/delete?postid=${postID}`)
			.then(() => {
				onDelete(postID);
			});
	};
	if (postUrl) {
		return (
			<li className='post-item'>
				<a
					className=' left-info'
					href={postUrl}
					target='_blank'
					rel='noreferrer noopener'
				>
					<span className='title'>{postTitle}</span>
					<strong className='author'>- {postUser} -</strong>
				</a>
				<span className='right-info'>
					<span className='date'>{postDate}</span>
					<button className='trash-icon' onClick={deleteStory}></button>
				</span>
			</li>
		);
	}
	return (
		<li className='post-item'>
			<span className='left-info'>
				<span className='title'>{postTitle}</span>
				<strong className='author'>- {postUser} -</strong>
			</span>
			<span className='right-info'>
				<span className='date'>{postDate}</span>
				<button className='trash-icon' onClick={deleteStory}></button>
			</span>
		</li>
	);
};

export default PostItem;
