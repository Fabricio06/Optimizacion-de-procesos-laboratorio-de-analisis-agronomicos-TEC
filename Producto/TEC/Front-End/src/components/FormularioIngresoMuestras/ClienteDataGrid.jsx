    import React, { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { createTheme, ThemeProvider } from '@mui/material/styles';
    import { DataGrid, esES } from '@mui/x-data-grid';


    const ClienteSelectorPage = () => {
        const [clientes, setClientes] = useState([]);
        const [filtroNombre, setFiltroNombre] = useState('');
        const [filtroCedula, setFiltroCedula] = useState('');
        const navigate = useNavigate();
        
        //Traductor del componente a español
        const tema = createTheme({//Aqui van los temas
        },esES,
        );

        //Obtiene los datos de clientes del servidor
        useEffect(() => {
             fetch('http://localhost:3001/api/cliente/obtenerClientesFiltro/parametros')
            .then(response => response.json())
            .then(data => {
                setClientes(data);
            });
        }, []);

        //Esperando la solicitud
        if (clientes.length === 0) {
            return <div>Cargando clientes...</div>;
        }

        

        const handleSelectCliente = (cliente) => {
            localStorage.setItem('clienteSeleccionado', JSON.stringify(cliente));
            navigate('/FormularioIngresoMuestras');
        };

        const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nombre', headerName: 'Nombre', width: 150 },
        { field: 'cedula', headerName: 'Nombre', width: 150 },
        {
            field: 'seleccionar',
            headerName: 'Seleccionar',
            sortable: false,
            renderCell: (params) => (
            <button onClick={() => handleSelectCliente(params.row)}>
                Seleccionar
            </button>
            ),
            width: 160,
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
                <ThemeProvider theme={tema}>
                    <div style={{ margin: '10px 0' }}>
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
                            rows={clientesFiltrados}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 20]}
                            checkboxSelection
                        />
                    </div>
                </ThemeProvider>
            </div>
        );
    };
    
    export default ClienteSelectorPage;