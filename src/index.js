import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";

const defaultState = {
  cash: 0,
}

const cashReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload};
      
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload};
      
    default: 
      return state;
  }
}

const customerReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return {...state, cash: state.cash + action.payload};
      
    case "GET_CUSTOMER":
      return {...state, cash: state.cash - action.payload};
      
    default: 
      return state;
  }
}

const ctore = createStore(reducer);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
