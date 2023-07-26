`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import { FIELD_WIDTH, FIELD_HEIGHT } from '../constants.js';

function CommentInput({ inputValues, onChange, addComment }) {
  const { authorInputValue, commentInputValue } = inputValues;

  return (
    <form onSubmit={addComment}>
      <input
        required
        name='authorInputValue'
        type='text'
        size={FIELD_WIDTH}
        placeholder='Name'
        value={authorInputValue}
        onChange={onChange}
      />
      <textarea
        required
        name='commentInputValue'
        cols={FIELD_WIDTH}
        rows={FIELD_HEIGHT}
        placeholder='Comment'
        value={commentInputValue}
        onChange={onChange}
      />
      <input className='button' type='submit' value='Post' />
    </form>
  );
}

CommentInput.propTypes = {
  inputValues: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CommentInput;
