import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import Registro from './components/Registro';
import GestionClientes from './components/GestionClientes';
import RegistroClientes from './components/RegistroClientes';
import EliminarEditarClientes from './components/EliminarEditarClientes';
import FormulariosMuestras from './components/FormulariosMuestras';
import PerfilUsuario from './components/PerfilUsuario';
import FormularioIngresoMuestras from './components/FormularioIngresoMuestras/FormIngresoMuestrasPrincipal';
import HistorialClientes from './components/HistorialClientes';
import ClienteSelectorPage from './components/FormularioIngresoMuestras/ClienteDataGrid';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HistorialFormularios from './components/HistorialFormularios';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "App", //Recordar aplicar Require Login aquí
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
    path: "formulariosMuestras",
    element: <FormulariosMuestras/>,
  },
  {
    path: "registroClientes",
    element: <RegistroClientes/>,
  },
  {
    path: "eliminarEditarClientes/:id",
    element: <EliminarEditarClientes/>,
  },
  {
    path: "perfilUsuario",
    element: <PerfilUsuario/>,
  },
  {
    path: "FormularioIngresoMuestras",
    element: <FormularioIngresoMuestras/>,
  },{
    path: "historialClientes",
    element: <HistorialClientes/>
  },{ 
    path: "/seleccionar-cliente",
    element: <ClienteSelectorPage/>
  },{ 
    path: "/historialFormularios",
    element: <HistorialFormularios/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);