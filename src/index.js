import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import counter from './store/counterStore'
import cartStore from './store/cartStore'

ReactDOM.render(
    <Provider counter={counter} cartStore={cartStore}>
      <App />
    </Provider>,
  document.getElementById('root')
);
