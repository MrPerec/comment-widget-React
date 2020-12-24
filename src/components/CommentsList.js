`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import CommentDisplay from './CommentDisplay.js';

function CommentsList( {comments, deleteComment} ) {
	const commentsList = comments.map( (obj) => {
		let keysContents = ``;
		for (const key in obj) keysContents += obj[key];
		if (keysContents !== ``){
			const {author, text, dateTime, id} = obj;
			const comment = { 
				author,
				text,
				dateTime,
				id
			};
			return(
				<CommentDisplay 
					key={id}
					comment={comment} 
					deleteComment={deleteComment}
				/>
			)
		} 
	})
	return(
		<div>{commentsList}</div>
	) 
}

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
	deleteComment: PropTypes.func.isRequired
}

export default CommentsList