import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid, esES } from '@mui/x-data-grid';


const HistorialClientes = () =>{
        const [clientes, setAllClientes] = useState([]);
        const [filtroNombre, setFiltroNombre] = useState('');
        const [filtroCedula, setFiltroCedula] = useState('');
        const navigate = useNavigate();

        const API_URL = 'http://localhost:3001/api/cliente/obtenerClientesFiltro/parametros';
        
        //Traductor del componente a español
        const tema = createTheme({//Aqui van los temas
        },esES,
        );


        const fetchAllClientes = () => {
            fetch(`${API_URL}/`)
              .then(response => response.json())
              .then(data => setAllClientes(data))
              .catch(error => console.error('Error al obtener todas las facturas:', error));
          };

        //Obtiene los datos de clientes del servidor
        useEffect(() => {
            // Obtener todas las facturas al cargar la página
            fetchAllClientes();
          }, []);

        //Esperando la solicitud
        if (clientes.length === 0) {
            return <div>Cargando clientes...</div>;
        }

        

        const handleUpdateCliente = (clienteid) => {
            navigate(`/eliminarEditarClientes/${clienteid}`, { state: { id: clienteid } });
        };

    

        // Código en tu componente React para eliminar cliente
        const handleEliminarCliente = async (id)=> {
            try {
        const response = await fetch(`http://localhost:3001/api/cliente/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data); // Manejar la respuesta de la eliminación en el front-end
        // Actualizar la lista de clientes en tu componente después de eliminar
        fetchAllClientes();
        } catch (error) {
        console.error('Error al eliminar cliente:', error);
        }
        };


        const columns = [

        { field: 'nombre', headerName: 'Nombre', width: 150 },
        { field: 'cedula', headerName: 'Cedula', width: 150 },
        { field: 'empresa', headerName: 'Empresa', width: 90 },
        { field: 'telefono', headerName: 'Telefono', width: 150 },
        { field: 'email_informe', headerName: 'Email Informe', width: 150 },
        { field: 'email_factura', headerName: 'Email Factura', width: 150 },
        { field: 'provincia', headerName: 'Provincia', width: 150 },
        { field: 'canton', headerName: 'Canton', width: 90 },
        { field: 'distrito', headerName: 'Distrito', width: 150 },
        { field: 'otras_senas', headerName: 'Otras señas', width: 150 },
        { field: 'cultivo', headerName: 'Cultivo', width: 150 },
        { field: 'boleta', headerName: 'Boleta', width: 150 },

        {
            field: 'eliminar',
            headerName: 'Eliminar',
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleEliminarCliente(params.row.id)}>
                    Eliminar
                </button>
            ),
            width: 120,
        },
        {
            field: 'editar',
            headerName: 'Editar',
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleUpdateCliente(params.row.id)}>
                    Editar
                </button>
            ),
            width: 120,
        },
        ];

        const filtrarClientes = () => {
            return clientes.filter(cliente => {
                const nombreCoincide = cliente.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
                let cedulaCoincide = false;
        
                if (cliente.cedula) {
                    cedulaCoincide = cliente.cedula.toString().toLowerCase().includes(filtroCedula.toLowerCase());
                }
        
                return nombreCoincide && cedulaCoincide;
            });
        };
        
    
        const clientesFiltrados = filtrarClientes();
    
        return (
            <div className='ClientesSelectorPage'>
                <div>
                    <Menu/>
                </div>
                <ThemeProvider theme={tema}>
                    <div className='filtrosInput' style={{ margin: '20px 0' }}>
                        <p>Filtrar por nombre</p>
                        <input
                            type="text"
                            value={filtroNombre}
                            onChange={(e) => setFiltroNombre(e.target.value)}
                            placeholder="Filtrar por nombre"
                        />
                        <p>Filtrar por cedula</p>
                        <input
                            type="text"
                            value={filtroCedula}
                            onChange={(e) => setFiltroCedula(e.target.value)}
                            placeholder="Filtrar por cédula"
                        />
                    </div>
                    <div style={{ 'min-height': '100vh', width: '100%'}}>
                        <DataGrid
                            rows={clientesFiltrados}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 20]}
                            checkboxSelection
                        />
                    </div>
                </ThemeProvider>
                <div>
                    <Footer/>
                </div>
            </div>
        );




}


export default HistorialClientes;