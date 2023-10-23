import React from 'react';
import Menu from './Menu';
import DatosClientes from './DatosClientes';

const EliminarEditarClientes = () =>{
    return(
    <div className='eliminareditarclientes'>
    
        <header>
            <Menu />
        </header>
    
        <div className='contenedor'>    
                <div className='encabezado'>
                    <label htmlFor="cedulaBuscar">Cedula:</label>
                    <input type="text" />
                    <button className='boton'>Filtrar</button>
                </div>
                <DatosClientes/>
                <div className='botones'>
                    <button className='boton'>Eliminar cliente</button>
                    <button className='boton'>Aplicar cambios</button>
                </div>
        </div>

    </div>
    );





}


export default EliminarEditarClientes;