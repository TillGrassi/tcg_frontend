import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';
import middleware from './middleware';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore(reducers, middleware);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

