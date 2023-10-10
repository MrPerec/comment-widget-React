`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import CommentDisplay from './CommentDisplay.jsx';

function CommentsList({ comments, deleteComment }) {
  const commentsList = comments.map(({ author, text, dateTime, id }) => {
    if (author || text || dateTime || id) return <CommentDisplay key={id} comment={{ author, text, dateTime, id }} deleteComment={deleteComment} />;
  });

  return <div>{commentsList}</div>;
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default CommentsList;
