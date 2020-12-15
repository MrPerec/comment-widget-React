`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import CommentDisplay from '../components/CommentDisplay.js';

function CommentsList( {comments, deleteComment} ) {
	const commentsList = comments.map( ( {author, text, dateTime, id} ) => {
		return(
			<CommentDisplay 
				key={id}
				author={author}
				text={text}
				dateTime={dateTime}
				deleteComment={ deleteComment.bind(comments, id) }
			/>
		)
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