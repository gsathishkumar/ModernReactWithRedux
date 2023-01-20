import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
