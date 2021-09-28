import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from'react-redux';
import './index.css';
import App from './components/App';

import store from '../store/index.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App emoji={emoji} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
