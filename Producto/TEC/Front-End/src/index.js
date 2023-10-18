import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import Registro from './components/Registro';
import RegistroClientes from './components/RegistroClientes';
import Bitacoras from './components/Bitacoras';
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