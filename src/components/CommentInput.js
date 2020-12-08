`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/style.js';
import {BOX_WIDTH, FIELD_WIDTH, FIELD_HEIGHT} from '../constants/constants.js';

function CommentInput(props) {
	const {addNewComment, newAuthor, onChangeComment, newText} = props;
	return(
		<form onSubmit={addNewComment}>
			<input 
				name='newAuthor'
				type='text' 
				size={BOX_WIDTH}
				placeholder='Ваше имя'
				value={newAuthor}
				onChange={onChangeComment}
			/>
			<textarea 
				name='newText'
				cols={FIELD_WIDTH}
				rows={FIELD_HEIGHT}
				placeholder='Ваш комментарий'
				value={newText}
				onChange={onChangeComment}
			/>
			<input style={style.button} type='submit' value='Добавить' />
		</form>
	) 
}

CommentInput.propTypes = {
	addNewComment: PropTypes.func.isRequired,
	newAuthor: PropTypes.string.isRequired,
	newText: PropTypes.string.isRequired,
	onChangeComment: PropTypes.func.isRequired,
}

export default CommentInput