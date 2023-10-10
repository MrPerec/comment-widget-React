/**
 * Главный файл приложения, отвечающий за рендеринг компонента App в корневой элемент HTML.
 * @module index
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './App.jsx';

/**
 * Функция, которая рендерит компонент App в корневой элемент HTML с классом "root".
 * @function
 * @memberof module:index
 * @returns {void}
 */
ReactDOM.render(<App />, document.querySelector(`.root`));
