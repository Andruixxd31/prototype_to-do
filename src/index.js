import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
