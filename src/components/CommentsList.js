`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import CommentDisplay from './CommentDisplay.js';

function CommentsList( {comments, deleteComment} ) {
	const commentsList = comments.map( ( {author, text, dateTime, id} ) => {
		if (dateTime !==``){ 
			const comment = { 
				author: author,
				text: text,
				dateTime: dateTime,
				id: id
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