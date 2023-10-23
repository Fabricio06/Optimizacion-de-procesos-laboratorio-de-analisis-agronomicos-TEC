import React from 'react';

const DatosClientes = () =>{
    return(
    <div className='datosclientes'>
            <form action="">
                <ul id='formulario'>
                    <li>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id='nombre'  name='nombre_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="cedula">Cedula:</label>
                        <input type="number" id='cedula'  name='cedula_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="empresa">Empresa:</label>
                        <input type="text" id='empresa'  name='empresa_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="number" id='telefono'  name='telefono_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="email_informe">Email Informe:</label>
                        <input type="email" id='email_informe'  name='email_informe_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="email_factura">Email Factura:</label>
                        <input type="email" id='email_factura'  name='email_factura_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="provincia">Provincia:</label>
                        <input type="text" id='provincia'  name='provincia_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="canton">Canton:</label>
                        <input type="text" id='canton'  name='canton_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="distrito">Distrito:</label>
                        <input type="text" id='distrito'  name='distrito_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="otras_senas">Otras Señas:</label>
                        <input type="text" id='otras_senas'  name='otras_senas_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="cultivo">Cultivo:</label>
                        <input type="text" id='cultivo'  name='cultivo_usuario'/>
                    </li>
                    <li>
                        <label htmlFor="boleta">Boleta:</label>
                        <input type="text" id='boleta'  name='boleta_usuario'/>
                    </li>
                </ul>
                
            </form>
        </div>
    );





}


export default DatosClientes;