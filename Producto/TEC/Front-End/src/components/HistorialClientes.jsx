import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import DatosClientes from './DatosClientes';
import Footer from './Footer';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';


const HistorialClientes = () =>{
    const [idCliente, setIdCliente] = useState('');
    const [clienteData, setClienteData] = useState(null);
    const [allClientes, setAllClientes] = useState([]);

    const navigate = useNavigate();

    const API_URL = 'http://localhost:3001/api/cliente/obtenerClientesFiltro/parametros'

    const fetchAllClientes = () => {
        fetch(`${API_URL}/`)
          .then(response => response.json())
          .then(data => setAllClientes(data))
          .catch(error => console.error('Error al obtener todos los clientes:', error));
      };

      const [updateData, setUpdateData] = useState({
        cedula: '',
        nombre: '',
        empresa: '',
        telefono: '',
        email_informe: '',
        email_factura: '',
        provincia: '',
        canton: '',
        distrito: '',
        otras_senas: '',
        cultivo: '',
        boleta: '',
      });

    useEffect(() => {
        // Obtener todas las facturas al cargar la página
        fetchAllClientes();
    }, []);

    
      


      const handleInputChange = (event) => {
        setIdCliente(event.target.value);
      };
    
      const handleSearchClick = () => {
        // Cuando se hace clic en "Buscar", vuelve a cargar todas las facturas
        fetchAllClientes();
      };

      const handleDeleteClick = () => {
        // Verifica si hay una factura seleccionada antes de intentar eliminar
        if (idCliente) {
          // Realiza la solicitud a la API para obtener la factura según el ID
          fetch(`${API_URL}/${idCliente}`)
            .then(response => response.json())
            .then(data => {
              if (data) {
                // Si se encuentra la factura, procede a eliminarla
                fetch(`${API_URL}/${idCliente}`, {
                  method: 'DELETE',
                })
                  .then(response => {
                    if (response.ok) {
                      // Eliminación exitosa, vuelve a cargar todas las facturas
                      fetchAllClientes();
                      setClienteData(null); // Limpia los datos de la factura después de eliminar
                    } else {
                      console.error('Error al eliminar el cliente:', response.statusText);
                    }
                  })
                  .catch(error => console.error('Error al eliminar el cliente:', error));
              } else {
                console.warn('No se encontró ningun cliente con el ID proporcionado.');
              }
            })
            .catch(error => console.error('Error al obtener datos del cliente:', error));
        } else {
          console.warn('No hay ID de cliente proporcionado para eliminar.');
        }
      };
     
      const handleUpdateData = () => {
        // Lógica para enviar los datos actualizados al servidor
        fetch(`${API_URL}/${idCliente}`, {
          method: 'PUT', // Utiliza el método HTTP adecuado para la actualización (por ejemplo, PUT)
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        })
          .then(response => {
            if (response.ok) {
              // Actualización exitosa, vuelve a cargar todas las facturas
              fetchAllClientes();
              setClienteData(null); // Limpia los datos de la factura después de actualizar
              setUpdateData({}); // Limpia los datos de actualización después de actualizar
            } else {
              console.error('Error al actualizar el cliente:', response.statusText);
            }
          })
          .catch(error => console.error('Error al actualizar el cliente:', error));
      };
    
      if (idCliente) {
        fetch(`${API_URL}/${idCliente}`)
          .then(response => response.json())
          .then(data => {
            if (data) {
              setUpdateData({
                cedula: data.cedula,
                nombre: data.nombre,
                empresa: data.empresa,
                telefono: data.telefono,
                email_informe: data.email_informe,
                email_factura: data.email_factura,
                provincia: data.provincia,
                canton: data.canton,
                distrito: data.distrito,
                otras_senas: data.otras_senas,
                cultivo: data.cultivo,
                boleta: data.boleta,
              });
            } else {
              console.warn('No se encontró ningun cliente con el ID proporcionado.');
            }
          })
          .catch(error => console.error('Error al obtener datos del cliente:', error));
      } else {
        console.warn('No hay ID de cliente proporcionado para actualizar.');
      }
    
    
      const handleEditClick = (clienteId) => {
        // Cuando se hace clic en "Editar", navega a la ruta de editar factura con el ID correspondiente
        navigate(`/editar/${clienteId}`, { state: { id: clienteId } });
      };  
    
    

    return(
    <div className='historialclientes'>
        <header>
            <Menu />
        </header>
        <div className='contenedor'>    
                <div className='encabezado'>
                    <form>
                    <label htmlFor="cedulaBuscar">Cedula:</label>
                    <input type="text" id= "inputnombreCliente" className="estilosinput" name='inputnombreCliente' onChange={handleInputChange}/>
                    <button type='button' className='boton' onClick={handleSearchClick}>Filtrar</button>
                    </form>
                </div>
                <div className='gridInformacion'>
                    <table>
                        <thead>
                            <tr>
                            <td><b>Cédula</b></td>
                            <td><b>Nombre</b></td>
                            <td><b>Empresa</b></td>
                            <td><b>Teléfono</b></td>
                            <td><b>Email Informe</b></td>
                            <td><b>Email Factura</b></td>
                            <td><b>Provincia</b></td>
                            <td><b>Canton</b></td>
                            <td><b>Distrito</b></td>
                            <td><b>Otras Señas</b></td>
                            <td><b>Cultivo</b></td>
                            <td><b>Boleta</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {clienteData && (
                            <tr>
                            <td>{clienteData.id}</td>
                            <td>{clienteData.cedula}</td>
                            <td>{clienteData.nombre}</td>
                            <td>{clienteData.empresa}</td>
                            <td>{clienteData.telefono}</td>
                            <td>{clienteData.email_informe}</td>
                            <td>{clienteData.email_factura}</td>
                            <td>{clienteData.provincia}</td>
                            <td>{clienteData.canton}</td>
                            <td>{clienteData.distrito}</td>
                            <td>{clienteData.otras_senas}</td>
                            <td>{clienteData.cultivo}</td>
                            <td>{clienteData.boleta}</td>
                            </tr>
                            )}
                            {allClientes.map((personaClienteRoutes) => (
                            <tr key={personaClienteRoutes.id}>
                            <td>{personaClienteRoutes.cedula}</td>
                            <td>{personaClienteRoutes.nombre}</td>
                            <td>{personaClienteRoutes.empresa}</td>
                            <td>{personaClienteRoutes.telefono}</td>
                            <td>{personaClienteRoutes.email_informe}</td>
                            <td>{personaClienteRoutes.email_factura}</td>
                            <td>{personaClienteRoutes.provincia}</td>
                            <td>{personaClienteRoutes.canton}</td>
                            <td>{personaClienteRoutes.distrito}</td>
                            <td>{personaClienteRoutes.otras_senas}</td>
                            <td>{personaClienteRoutes.cultivo}</td>
                            <td>{personaClienteRoutes.boleta}</td>
                            <td></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                <button className='botones' type='button' onClick={handleDeleteClick}>Eliminar</button>
                </div>
        </div>
        <footer>
            <Footer/>
        </footer>

    </div>
    );





}


export default HistorialClientes;