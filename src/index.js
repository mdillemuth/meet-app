import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as atatus from 'atatus-spa';
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

atatus.config('b206faf0f0394dfcac9e7e53568bc5e8').install();
// reportWebVitals();

serviceWorker.register();
