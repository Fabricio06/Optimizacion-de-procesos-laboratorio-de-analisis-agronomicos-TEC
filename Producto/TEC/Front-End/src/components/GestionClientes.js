import React from 'react';
import Icono1 from '../images/microscopio.png'
import Icono2 from '../images/portafolio.png'
import Icono3 from '../images/trabajando-en-casa.png'
import Menu from './Menu'
import Footer from './Footer'


const GestionClientes = () =>{
    return(
    <div className='App2'>
            <div className='header'>
                <Menu/>
            </div>
        <div className='Main'>
        <section id="inicio">
            <div class="img-cover2"></div>
            <div class="txt-container main-container">
                <div class="txt-intro2">
                    <h1 class="main-title">Gestión de Clientes</h1>
                    <p>Bienvenido a la sección de edición, inserción, o eliminación de clientes</p>
                </div>
            </div>    
        </section>
        <section className='Body3'>
        <h1>Opciones Clientes</h1>
            <div className='options main-container'>
                <div className='option2'>
                    <h3>Registro de clientes</h3>
                    <p>Registre a sus nuevos clientes</p>
                    <p>Ingrese <strong> <a href='/registroClientes'>aquí</a></strong></p>
                    <img src={Icono1}/>
                </div>
                <div className='option2'>
                    <h3>Editar clientes</h3>
                    <p>Edite datos de los clientes</p>
                    <p>Ingrese <strong> <a href='/eliminarEditarClientes'>aquí</a></strong></p>
                    <img src={Icono2}/>
                </div>
                <div className='option2'>
                    <h3>Historial de clientes</h3>
                    <p>Verifique el historial de clientes y elimine si es necesario</p>
                    <p>Ingrese <strong><a href='/historialClientes'>aquí</a></strong></p>
                    <img src={Icono3}/>
                </div>
            </div>
        </section>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
        </div>
        


    );





}


export default GestionClientes;