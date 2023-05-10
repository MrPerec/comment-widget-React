`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import { FIELD_WIDTH, FIELD_HEIGHT } from '../constants/constants.js';

function CommentInput({ authorInputValue, commentInputValue, onChangeComment, addComment }) {
  return (
    <form onSubmit={addComment}>
      <input name='authorInputValue' type='text' size={FIELD_WIDTH} placeholder='Name' value={authorInputValue} onChange={onChangeComment} />
      <textarea
        name='commentInputValue'
        cols={FIELD_WIDTH}
        rows={FIELD_HEIGHT}
        placeholder='Comment'
        value={commentInputValue}
        onChange={onChangeComment}
      />
      <input className='button' type='submit' value='Post' />
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
  authorInputValue: PropTypes.string.isRequired,
  commentInputValue: PropTypes.string.isRequired,
  onChangeComment: PropTypes.func.isRequired,
};

export default CommentInput;
