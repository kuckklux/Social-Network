import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
  { message: "Братишка" },
  { message: "Я тебе покушать принес" },
  { message: "Угощайся" },
];

let dialogs = [
  { id: 1, name: "cth" },
  { id: 2, name: "shbmnk" },
  { id: 3, name: "fv" },
];

let posts = [
  {id: 1, message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.", likesCount: "10" },
  {id: 2, message: "Только что что?", likesCount: "15" },
  {id: 3, message: "Гранату, ясное дело." },
  {id: 4, message: "Что гранату?" },
  {id: 5, message: "Только что." },
  {id: 6, message: "Что только что?" },
  {id: 7, message: "Гранату." },
  {id: 8, message: "Что гранату?" },
  {id: 9, message: "Только что." },
];

ReactDOM.render(
  <React.StrictMode>
    <App messages = {messages} dialogs = {dialogs} posts = {posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
