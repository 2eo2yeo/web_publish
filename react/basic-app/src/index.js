import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import AppCgv from './components/cgv_layout/AppCgv.jsx';
import reportWebVitals from './reportWebVitals';
import AppLayout from './components/layout/AppLayout.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('body'));
// react돔이 이부분을 통해 만들어짐
root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();