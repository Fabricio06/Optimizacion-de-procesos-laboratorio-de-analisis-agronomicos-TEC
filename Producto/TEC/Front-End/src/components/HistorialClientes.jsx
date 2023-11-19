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
                            <td colSpan={2}><b>Nombre</b></td>
                            <td><b>Cédula</b></td>
                            <td><b>Empresa</b></td>
                            <td><b>Teléfono</b></td>
                            <td colSpan={2}><b>Email Informe</b></td>
                            <td><b>Email Factura</b></td>
                            <td><b>Provincia</b></td>
                            <td><b>Canton</b></td>
                            <td><b>Distrito</b></td>
                            <td><b>Otras Señas</b></td>
                            <td><b>Cultivo</b></td>
                            <td><b>Boleta</b></td>
                        </thead>
                        <tbody>
                            <td colSpan={2}><b>Raschell</b></td>
                            <td><b>208390433</b></td>
                            <td><b>TEC</b></td>
                            <td><b>64345608</b></td>
                            <td><b>raschelljq132@gmail.com</b></td>
                            <td><b>tec@gmail.com</b></td>
                            <td><b>Alajuela</b></td>
                            <td><b>Los Chiles</b></td>
                            <td><b>Los Chiles</b></td>
                            <td><b>Centro</b></td>
                            <td><b>Cultivo</b></td>
                            <td><b>Boleta</b></td>
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