`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

function CommentDisplay( {comment, deleteComment} ) {
	const {author, text, dateTime, id} = comment;
	const onButtonClick = () => deleteComment(id);
	return(
		<div className='comment'>
			<div className='container'>{author}</div>
			<div className='container'>{text}</div>
			<div><time className='container' dateTime={dateTime}>{dateTime}</time></div>
			<button className='button' onClick={onButtonClick}>Удалить</button>
		</div>
	)
}

CommentDisplay.propTypes = {
	comment: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired
}


export default CommentDisplay