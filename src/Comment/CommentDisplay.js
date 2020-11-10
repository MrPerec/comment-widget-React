`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/style.js';

function CommentDisplay(props, deleteComment) {	
	return(
		props.comment.map( (elem, id) => {	
				if (elem.dateTime !== '') {
					return(
						<div key={id} style={style.comment}>
							<div style={style.container}>{elem.author}</div>
							<div style={style.container}>{elem.text}</div>
							<div style={style.container}>{elem.dateTime}</div>
							<button style={style.button} onClick={() => props.deleteComment(id)}>
								{elem.deleteButton}
							</button>
						</div>
					)
				}
		})
		
	) 
}

CommentDisplay.propTypes = {
	comment: PropTypes.arrayOf(PropTypes.object).isRequired,
	deleteComment: PropTypes.func.isRequired,
}

export default CommentDisplay