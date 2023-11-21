import Menu from './Menu';
import DatosClientes from './DatosClientes';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EliminarEditarClientes = () =>{

    const  API_URL = 'http://localhost:3001/api/cliente'

    const { id: clienteId } = useParams();

    const [formData, setFormData] = useState({
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
      // Realiza la solicitud a la API para obtener la factura según el ID
      fetch(`http://localhost:3001/api/cliente/${clienteId}`)
        .then(response => response.json())
        .then(data => {
          // Actualiza el estado formData con los valores de la factura encontrada
          
          setFormData(data);
        })
        .catch(error => console.error('Error al obtener datos de la factura:', error));
    }, [clienteId]);
    
      
    
      const enviarDatos = async () => {
        try {
          // Resto del código para enviar datos actualizados
          const response = await fetch(`${API_URL}/${clienteId}`, {
            method: 'PUT', // Usar el método PUT para actualizar la factura existente
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      
    

    return(
    <div className='eliminareditarclientes'>
        <header>
            <Menu />
        </header>
        <div className='contenedor'>
                <div className='titulo'>
                    <h2>Edición de clientes</h2>
                </div>
                <div className='datosClientes'>
                <form action="">
                <ul id='formulario'>
                    <li>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" className="estilosInput" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                    </li>
                    <li>
                        <label htmlFor="cedula">Cedula:</label>
                        <input type="number" id='cedula'  name='cedula' value={formData.cedula} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="empresa">Empresa:</label>
                        <input type="text" id='empresa'  name='empresa' value={formData.empresa} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="number" id='telefono'  name='telefono' value={formData.telefono} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="email_informe">Email Informe:</label>
                        <input type="email" id='email_informe'  name='email_informe' value={formData.email_informe} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="email_factura">Email Factura:</label>
                        <input type="email" id='email_factura'  name='email_factura' value={formData.email_factura} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="provincia">Provincia:</label>
                        <input type="text" id='provincia'  name='provincia' value={formData.provincia} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="canton">Canton:</label>
                        <input type="text" id='canton'  name='canton' value={formData.canton} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="distrito">Distrito:</label>
                        <input type="text" id='distrito'  name='distrito' value={formData.distrito} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="otras_senas">Otras Señas:</label>
                        <input type="text" id='otras_senas'  name='otras_senas' value={formData.otras_senas} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="cultivo">Cultivo:</label>
                        <input type="text" id='cultivo'  name='cultivo' value={formData.cultivo} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="boleta">Boleta:</label>
                        <input type="text" id='boleta'  name='boleta' value={formData.boleta} onChange={handleInputChange}/>
                    </li>
                </ul>
                
            </form>
                </div>
                
                <div className='botones'>
                    <button onClick={enviarDatos}>Aplicar cambios</button>
                </div>
        </div>

    </div>
    );





}


export default EliminarEditarClientes;