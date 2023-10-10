/**
 * Виджет комментариев
 * @module App
 */

import React from 'react';
import { useState, useEffect } from 'react';
import CommentInput from './components/CommentInput.js';
import CommentsList from './components/CommentsList.js';
import { STORAGE_COMMENTS } from './constants.js';
import { getUuid } from './utils.js'; // Добавьте комментарий JSDoc к импорту

/**
 * Компонент React, представляющий приложение для отображения комментариев.
 * @component
 * @returns {React.Component} Компонент App.
 */
export default function App() {
  const [comments, setComments] = useState([{ id: null, author: null, text: null, dateTime: null }]);
  const [inputValues, setInputValues] = useState({ authorInputValue: String(), commentInputValue: String() });

  /**
   * Эффект React, который выполняется при монтировании компонента.
   * Загружает комментарии из локального хранилища и устанавливает их в состояние.
   * @function
   * @name useEffect
   * @memberof App
   * @inner
   *
   * @returns {void}
   */
  useEffect(() => {
    /**
     * Загружает комментарии из локального хранилища.
     * @type {Array}
     * @throws {SyntaxError} Если сохраненные комментарии не удалось распарсить.
     */
    const savedComments = JSON.parse(localStorage.getItem(STORAGE_COMMENTS));

    /**
     * Устанавливает сохраненные комментарии в состояние компонента, если они доступны.
     * @type {Array}
     */
    if (savedComments !== null) setComments(savedComments);
  }, []);

  /**
   * Обработчик изменения значения в поле ввода.
   * @param {Event} event - Объект события изменения.
   */
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  /**
   * Обработчик удаления комментария.
   * @param {string} commentId - Идентификатор комментария для удаления.
   */
  const handeDeleteComment = (commentId) => {
    const updatedComments = comments.filter((elem) => elem.id !== commentId);

    setComments(updatedComments);
    localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(updatedComments));
  };

  /**
   * Обработчик добавления комментария.
   * @param {Event} event - Объект события отправки формы.
   */
  const handleAddComment = (event) => {
    event.preventDefault();
    const { authorInputValue, commentInputValue } = inputValues;

    if (authorInputValue.trim() || commentInputValue.trim()) {
      /**
       * Новый комментарий
       * @type {{id: number|string, author: string, text: string, dateTime: object }}
       */
      const newComment = {
        id: getUuid(),
        author: authorInputValue,
        text: commentInputValue,
        dateTime: new Date().toLocaleString(),
      };

      setComments((prevComments) => [newComment, ...prevComments]);

      /**
       * Копия массива комментариев
       * @type {Array<object>}
       */
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
    <main>
      <CommentInput inputValues={inputValues} onChange={handleOnChange} addComment={handleAddComment} />
      <CommentsList comments={comments} deleteComment={handeDeleteComment} />
    </main>
  );
}
