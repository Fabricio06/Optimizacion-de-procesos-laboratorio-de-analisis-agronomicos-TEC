import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid, esES } from '@mui/x-data-grid';


const HistorialFormularios = () =>{
        const [formularios, setAllFormularios] = useState([]);
        const [filtroNombre, setFiltroNombre] = useState('');
        const [filtroCedula, setFiltroCedula] = useState('');
        const navigate = useNavigate();

        const API_URL = 'http://localhost:3001/api/cliente/obtenerFormularioPorFiltro/parametros';
        
        //Traductor del componente a español
        const tema = createTheme({//Aqui van los temas
        },esES,
        );


        const fetchAllFormularios = () => {
            fetch(`${API_URL}`)
              .then(response => response.json())
              .then(data => setAllFormularios(data))
              .catch(error => console.error('Error al obtener todos los formularios:', error));
          };

        //Obtiene los datos de formularios del servidor
        useEffect(() => {
            // Obtener todas las facturas al cargar la página
            fetchAllFormularios();
          }, []);

        //Esperando la solicitud
        if (formularios.length === 0) {
            return <div>Cargando formularios...</div>;
        }

        

        const handleUpdateFormulario = (clienteid) => {
            navigate(`/eliminarEditarClientes/${clienteid}`, { state: { id: clienteid } });
        };


        const handleVisualizarFormulario = (formulario) => {
            navigate(`/FormularioIngresoMuestras`, { state: { formulario } });
        };

        // Código en tu componente React para eliminar formulario
        const handleEliminarFormulario = async (id)=> {
            try {
        const response = await fetch(`http://localhost:3001/api/formulario/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data); // Manejar la respuesta de la eliminación en el front-end
        // Actualizar la lista de formularios en tu componente después de eliminar
        fetchAllFormularios();
        } catch (error) {
        console.error('Error al eliminar formulario:', error);
        }
        };


        const columns = [
        { field: 'orden_compra', headerName: '# Orden de Compra', width: 150 },
        { field: 'nombre', headerName: 'Nombre', width: 150 },
        { field: 'cedula', headerName: 'Cedula', width: 150 },
        { field: 'empresa', headerName: 'Empresa', width: 90 },
        { field: 'email_factura', headerName: 'Email_Factura', width: 150 },
        { field: 'recibido_por', headerName: 'Recibido Por', width: 150 },
        { field: 'fecha_envio', headerName: 'Fecha de Envio', width: 150 },  
        { field: 'solicitud_factura', headerName: 'Solicitud de Factura', width: 150 },
        { field: 'costo_analisis', headerName: 'Costo_Analisis', width: 150 },  
        { field: 'iva', headerName: 'IVA', width: 150 },
        { field: 'total_pagar', headerName: 'Total_Pagar', width: 150 },
        { field: 'factura_banco', headerName: 'Factura_Banco', width: 150 },

        {
            field: 'eliminar',
            headerName: 'Eliminar',
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleEliminarFormulario(params.row.formulario_id)}>
                    Eliminar
                </button>
            ),
            width: 120,
        },
        {
            field: 'visualizar',
            headerName: 'Visualizar',
            sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleVisualizarFormulario(params.row)}>
                    Visualizar
                </button>
            ),
            width: 120,
        },
        ];

        const filtrarFormularios = () => {
            return formularios.filter(formulario => {
                const nombreCoincide = formulario.nombre.toLowerCase().includes(filtroNombre.toLowerCase());
                let cedulaCoincide = false;
        
                if (formulario.cedula) {
                    cedulaCoincide = formulario.cedula.toString().toLowerCase().includes(filtroCedula.toLowerCase());
                }
        
                return nombreCoincide && cedulaCoincide;
            });
        };
        
    
        const formulariosFiltrados = filtrarFormularios();
    
        return (
            <div className='FormulariosSelectorPage'>
                <div>
                    <Menu/>
                </div>
                <ThemeProvider theme={tema}>
                    <div className = 'filtrosInput' style={{ margin: '10px 0' }}>
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
                    <div style={{ 'min-height': '100vh', width: '100%' }}>
                        <DataGrid
                            rows={formulariosFiltrados}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 20]}
                            checkboxSelection
                            getRowId={(row) => row.formulario_id}
                        />
                    </div>
                </ThemeProvider>
                <div>
                    <Footer/>
                </div>
            </div>
        );
}


export default HistorialFormularios;