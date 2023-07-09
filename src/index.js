import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Product from './pages/Product';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children: [
    // {index: true, element: <Product />},
    {path: 'product', element: <Product />},
    {path: 'product/:prod', element: <Product />},
    {path: 'signUp', element: <SignUp />},
    {path: 'signUp/:user', element: <SignUp />},
  ]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);