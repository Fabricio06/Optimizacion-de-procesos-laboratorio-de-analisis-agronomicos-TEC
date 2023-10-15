import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import Registro from './components/Registro';
import RegistroClientes from './components/RegistroClientes';
import Bitacoras from './components/Bitacoras';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "App",
    element: <App/>,
  },
  {
    path: "registro",
    element: <Registro/>,
  },
  {
    path: "registroClientes",
    element: <RegistroClientes/>,
  },
  {
    path: "bitacoras",
    element: <Bitacoras/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
