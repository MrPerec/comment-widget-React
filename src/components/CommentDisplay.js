`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/style.js';

function CommentDisplay(props) {
	const {comment, button, container} = style;
	const {author, text, dateTime, deleteComment } = props;
	return(
		<div style={comment}>
			<div style={container}>{author}</div>
			<div style={container}>{text}</div>
			<div style={container}>{dateTime}</div>
			<button style={button} onClick={deleteComment}>Удалить</button>
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