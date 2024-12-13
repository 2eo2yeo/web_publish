import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppAvatar from './components/avatar/AppAvatar';
// import AppCounter from './components/counter/AppCounter';
// import AppCounter2 from './components/counter2/AppCounter2';
// import AppBestSeller from './components/yes24/AppBestSeller';
// import AppOlive from './components/olive/AppOlive.jsx';
// import AppAladin from './components/aladin/AppAladin.jsx';
// import AppAladin from './components/aladin/AppAladin.jsx';
// import AppAladin2 from './components/aladin2/AppAladin2.jsx';
import AppForm from './components/form/AppForm.jsx';
// import CgvLoginForm from './components/form/CgvLoginForm.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
