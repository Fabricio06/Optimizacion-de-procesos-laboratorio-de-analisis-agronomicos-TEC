import React from 'react';

const HeaderTable = () => {
return (  
    <div className='headerTable'>
        <p>
            <a href="https://www.tec.ac.cr" target="_blank" rel="noreferrer" >
                www.tec.ac.cr
            </a>
        </p>
        <table className='form-header-table'>
            <tr>
                <th>
                    <h2 className='light-header-font'>LABORATORIO DE ANÁLISIS AGRONOMICOS</h2>
                </th>
                <th colSpan="2">
                    <h2 className='light-header-font'>
                        <span>Código N:</span>
                        <br/>
                        <span>LAA-01-013</span>
                    </h2>
                </th>
            </tr>
            <tr>
            <td >
                <h1>REGISTRO INGRESO DE MUESTRAS</h1>
            </td>
            <td>
                <h2 className='light-header-font'>
                <span>Fecha de Emisión:</span>
                <br/>
                <span>08 Agosto 2019</span>
                </h2>
            </td>
            <td>
                <h2 className='light-header-font'>
                <span>Versión</span>
                <br/>
                <span>3</span>
                </h2>
            </td>
            </tr>
        </table>
    <hr class="line-below-div" />
    </div>
);}

export default HeaderTable;