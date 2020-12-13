`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';

function CommentDisplay({author, text, dateTime, deleteComment}) {
	return(
		<div className='comment'>
			<div className='container'>{author}</div>
			<div className='container'>{text}</div>
			<div className='container'>{dateTime}</div>
			<button className='button' onClick={deleteComment}>Удалить</button>
		</div>
	)
}

CommentDisplay.propTypes = {
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	dateTime: PropTypes.string.isRequired,
	deleteComment: PropTypes.func.isRequired,
}

export default CommentDisplay