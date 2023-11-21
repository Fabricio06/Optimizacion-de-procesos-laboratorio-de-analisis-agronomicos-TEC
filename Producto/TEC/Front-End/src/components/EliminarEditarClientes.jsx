import Menu from './Menu';
import DatosClientes from './DatosClientes';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EliminarEditarClientes = () =>{

    const  API_URL = 'http://localhost:3001/api/cliente/obtenerClientesFiltro/parametros'

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
        fetch(`http://localhost:3001/api/cliente/obtenerClientesFiltro/parametros${clienteId}`)
          .then(response => response.json())
          .then(data => {
            // Actualiza el estado formData con los valores de la factura encontrada
            setFormData(data);
          })
          .catch(error => console.error('Error al obtener datos del cliente:', error));
      }, [clienteId]);
    
      const imprimirInformacion = () => {
        var formulario = document.getElementById("frmEditarFactura");
        for (var i = 0; i < formulario.elements.length; i++) {
          console.log(formulario.elements[i].name + ": " + formulario.elements[i].value);
        }
      };
    
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
        imprimirInformacion();
      };
    
      
    

    return(
    <div className='eliminareditarclientes'>
        <header>
            <Menu />
        </header>
        <div className='contenedor'>
                <div className='titulo'>
                    <h2>Eliminación o edición de clientes</h2>
                </div>
                <div className='encabezado'>
                    <label htmlFor="cedulaBuscar">Cedula:</label>
                    <input type="text" />
                    <button className='boton'>Filtrar</button>
                </div>
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
                        <input type="text" id='empresa'  name='empresa_usuario' value={formData.empresa} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="number" id='telefono'  name='telefono_usuario' value={formData.telefono} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="email_informe">Email Informe:</label>
                        <input type="email" id='email_informe'  name='email_informe_usuario' value={formData.email_informe} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="email_factura">Email Factura:</label>
                        <input type="email" id='email_factura'  name='email_factura_usuario' value={formData.email_factura} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="provincia">Provincia:</label>
                        <input type="text" id='provincia'  name='provincia_usuario' value={formData.provincia} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="canton">Canton:</label>
                        <input type="text" id='canton'  name='canton_usuario' value={formData.canton} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="distrito">Distrito:</label>
                        <input type="text" id='distrito'  name='distrito_usuario' value={formData.distrito} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="otras_senas">Otras Señas:</label>
                        <input type="text" id='otras_senas'  name='otras_senas_usuario' value={formData.otras_senas} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="cultivo">Cultivo:</label>
                        <input type="text" id='cultivo'  name='cultivo_usuario' value={formData.cultivo} onChange={handleInputChange}/>
                    </li>
                    <li>
                        <label htmlFor="boleta">Boleta:</label>
                        <input type="text" id='boleta'  name='boleta_usuario' value={formData.boleta} onChange={handleInputChange}/>
                    </li>
                </ul>
                
            </form>
                <div className='botones'>
                    <button className='boton' onClick={enviarDatos}>Aplicar cambios</button>
                </div>
        </div>

    </div>
    );





}


export default EliminarEditarClientes;