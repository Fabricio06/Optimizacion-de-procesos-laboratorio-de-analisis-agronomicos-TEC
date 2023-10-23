import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import Registro from './components/Registro';
import GestionClientes from './components/GestionClientes';
import RegistroClientes from './components/RegistroClientes';
import EliminarEditarClientes from './components/EliminarEditarClientes';
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
    path: "gestionClientes",
    element: <GestionClientes/>,
  },
  {
    path: "bitacoras",
    element: <Bitacoras/>,
  },
  {
    path: "registroClientes",
    element: <RegistroClientes/>,
  },
  {
    path: "eliminarEditarClientes",
    element: <EliminarEditarClientes/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);