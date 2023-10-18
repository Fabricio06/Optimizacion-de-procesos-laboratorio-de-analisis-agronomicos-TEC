import React from 'react';
import Icono1 from '../images/microscopio.png'
import Icono2 from '../images/portafolio.png'
import Icono3 from '../images/trabajando-en-casa.png'

const Main = () => {
    return(
    <div className='Body'>
        <div className='Main'>
        <section id="inicio">
            <div class="img-cover"></div>
            <div class="txt-container main-container">
                <div class="txt-intro">
                    <h1 class="main-title">Bienvenido de nuevo</h1>
                    <p>Laboratorio de Análisis Agronómicos</p>
                </div>
            </div>    
        </section>
        <section className='Body2'>
        <h1>Página Principal</h1>
            <div className='options main-container'>
                <div className='option'>
                    <h3>Registro e Ingreso de Muestras de tierra</h3>
                    <p>Formulario para muestras de laboratorio</p>
                    <p>Ingrese <strong> aquí</strong></p>
                    <img src={Icono1}/>
                </div>
                <div className='option'>
                    <h3>Gestión de Clientes</h3>
                    <p>Registro, eliminación o edición de clientes según la necesidad</p>
                    <p>Ingrese <strong> <a href='/registroClientes'>aquí</a></strong></p>
                    <img src={Icono2}/>
                </div>
                <div className='option'>
                    <h3>Creación de bitácoras</h3>
                    <p>Seleccionar el tipo de bitácora y rellenar con nuevos datos</p>
                    <p>Ingrese <strong> <a href='/bitacoras'>aquí</a></strong></p>
                    <img src={Icono3}/>
                </div>
            </div>
        </section>
        </div>
    </div>
    );
}

export default Main;