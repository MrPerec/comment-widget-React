`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/style.js';

// function CommentDisplay(props, deleteComment) {	
function CommentDisplay(props) {	
		return(
			<div style={style.comment}>
				<div style={style.container}>{props.author}</div>
				<div style={style.container}>{props.text}</div>
				<div style={style.container}>{props.dateTime}</div>
				<button style={style.button} onClick={props.deleteComment}>
					{props.deleteButton}
				</button>
			</div>
		)
}

CommentDisplay.propTypes = {
	// comment: PropTypes.arrayOf(PropTypes.object).isRequired,
	// deleteComment: PropTypes.func.isRequired,
}

export default CommentDisplay