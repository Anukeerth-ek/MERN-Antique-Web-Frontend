import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import router from './routers/router.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider.jsx';
import {Provider} from 'react-redux'
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </AuthProvider>
  // </React.StrictMode>,
);
