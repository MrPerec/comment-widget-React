`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import CommentDisplay from '../components/CommentDisplay.js';

function CommentsList(props) {
	const {comments, deleteComment} = props;
	const commentsList = comments.map( (elem, id) => {
		if (elem.dateTime !== ``) {
			return(
				<CommentDisplay 
					key={id}
					author={elem.author}
					text={elem.text}
					dateTime={elem.dateTime}
					deleteComment={ deleteComment.bind(props, id) }
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