import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./Redux/state"

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, addMessage, updateNewPostText,  updateNewMessageText} from "./Redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};


rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

subscribe(rerenderEntireTree);