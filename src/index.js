import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// this is where it all starts. When index.html gets to <div id="root"></div>,
// the the following block calls the App function in App.js.
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
