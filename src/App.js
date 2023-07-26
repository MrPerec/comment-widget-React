import React from 'react';
import { useState, useEffect } from 'react';
import CommentInput from './components/CommentInput.js';
import CommentsList from './components/CommentsList.js';
import { STORAGE_COMMENTS } from './constants.js';
import { getUuid, getCurrentDateTime } from './utils.js';

export default function App() {
  const [comments, setComments] = useState([
    {
      id: Number(),
      author: String(),
      text: String(),
      dateTime: Date(),
    },
  ]);

  const [inputValues, setInputValues] = useState({
    authorInputValue: String(),
    commentInputValue: String(),
  });

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(STORAGE_COMMENTS));
    if (savedComments !== null) setComments(savedComments);
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handeDeleteComment = (commentId) => {
    const commentsWithoutDeletedComments = comments.filter((elem) => elem.id !== commentId);

    setComments(commentsWithoutDeletedComments);
    localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(commentsWithoutDeletedComments));
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const { authorInputValue, commentInputValue } = inputValues;

    if (authorInputValue.trim() || commentInputValue.trim()) {
      const uuid = getUuid();
      const currentDateTime = getCurrentDateTime();
      const newComment = {
        author: authorInputValue,
        text: commentInputValue,
        dateTime: currentDateTime,
        id: uuid,
      };

      setComments((prevComments) => [newComment, ...prevComments]);

      const commentsCopy = [newComment, ...comments];

      setInputValues({
        authorInputValue: String(),
        commentInputValue: String(),
      });

      localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(commentsCopy));
    } else {
      alert(`Please fill out those fields.`);
    }
  };

  return (
    <div>
      <CommentInput inputValues={inputValues} onChange={handleOnChange} addComment={handleAddComment} />
      <CommentsList comments={comments} deleteComment={handeDeleteComment} />
    </div>
  );
}
