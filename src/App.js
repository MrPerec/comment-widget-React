import React from 'react';
import { useState, useEffect } from 'react';
import CommentInput from './components/CommentInput.js';
import CommentsList from './components/CommentsList.js';
import { STORAGE_COMMENTS } from './constants.js';
import { getUuid } from './utils.js';

export default function App() {
  const [comments, setComments] = useState([{ id: null, author: null, text: null, dateTime: null }]);
  const [inputValues, setInputValues] = useState({ authorInputValue: String(), commentInputValue: String() });

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(STORAGE_COMMENTS));
    if (savedComments !== null) setComments(savedComments);
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handeDeleteComment = (commentId) => {
    const updatedComments = comments.filter((elem) => elem.id !== commentId);

    setComments(updatedComments);
    localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(updatedComments));
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const { authorInputValue, commentInputValue } = inputValues;

    if (authorInputValue.trim() || commentInputValue.trim()) {
      const newComment = {
        author: authorInputValue,
        text: commentInputValue,
        dateTime: new Date().toLocaleString(),
        id: getUuid(),
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
