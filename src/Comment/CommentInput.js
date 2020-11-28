`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/style.js';

function CommentInput(props) {
	return(
		<form onSubmit={props.addNewComment}>
			<input 
				type="text" 
				name="author"
				size="48"
				placeholder="Ваше имя"
				value={props.newAuthor}
				onChange={props.onChangeCommentAuthor}
			/>
			<textarea 
				name="text"
				cols="50" 
				rows="5"
				placeholder="Ваш комментарий"
				value={props.newText}
				onChange={props.onChangeCommentText}
			/>
			<input style={style.button} type="submit" value="Добавить" />
		</form>
	) 
}

CommentInput.propTypes = {
	addNewComment: PropTypes.func.isRequired,
	newAuthor: PropTypes.string.isRequired,
	onChangeCommentAuthor: PropTypes.func.isRequired,
	newText: PropTypes.string.isRequired,
	onChangeCommentText: PropTypes.func.isRequired,
}

export default CommentInput