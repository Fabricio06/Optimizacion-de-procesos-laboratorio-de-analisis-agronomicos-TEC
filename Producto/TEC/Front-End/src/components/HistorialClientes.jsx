import React from 'react';
import Menu from './Menu';
import DatosClientes from './DatosClientes';

const HistorialClientes = () =>{
    return(
    <div className='historialclientes'>
    
        <header>
            <Menu />
        </header>
    
        <div className='contenedor'>    
                <div className='encabezado'>
                    <label htmlFor="cedulaBuscar">Cedula:</label>
                    <input type="text" />
                    <button className='boton'>Filtrar</button>
                </div>
                
                <div className='gridInformacion'>

                </div>
        </div>

    </div>
    );





}


export default HistorialClientes;