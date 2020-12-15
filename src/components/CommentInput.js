`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import {BOX_WIDTH, FIELD_WIDTH, FIELD_HEIGHT} from '../constants/constants.js';

function CommentInput( {newAuthor, newText, onChangeComment, addComment} ) {
	return(
		<form onSubmit={addComment}>
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
			<input className='button' type='submit' value='Добавить' />
		</form>
	) 
}

CommentInput.propTypes = {
	addComment: PropTypes.func.isRequired,
	newAuthor: PropTypes.string.isRequired,
	newText: PropTypes.string.isRequired,
	onChangeComment: PropTypes.func.isRequired,
}

export default CommentInput