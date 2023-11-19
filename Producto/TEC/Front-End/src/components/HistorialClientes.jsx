import React from 'react';
import Menu from './Menu';
import DatosClientes from './DatosClientes';
import Footer from './Footer';
import '../App.css';

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
                    <table>
                        <thead>
                            <tr>
                            <td><b>Nombre</b></td>
                            <td><b>Cédula</b></td>
                            <td><b>Empresa</b></td>
                            <td><b>Teléfono</b></td>
                            <td colSpan={2}><b>Email Informe</b></td>
                            <td colSpan={2}><b>Email Factura</b></td>
                            <td><b>Provincia</b></td>
                            <td><b>Canton</b></td>
                            <td><b>Distrito</b></td>
                            <td><b>Otras Señas</b></td>
                            <td><b>Cultivo</b></td>
                            <td><b>Boleta</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Raschell</td>
                            <td>208390433</td>
                            <td>TEC</td>
                            <td>64345608</td>
                            <td colSpan={2}>raschelljq132@gmail.com</td>
                            <td colSpan={2}>tec@gmail.com</td>
                            <td>Alajuela</td>
                            <td>Los Chiles</td>
                            <td>Los Chiles</td>
                            <td>Centro</td>
                            <td>Cultivo</td>
                            <td>Boleta</td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td colSpan={2}></td>
                            <td colSpan={2}></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
        </div>
        <footer>
            <Footer/>
        </footer>

    </div>
    );





}


export default HistorialClientes;