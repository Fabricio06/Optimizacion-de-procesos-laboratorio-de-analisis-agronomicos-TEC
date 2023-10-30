import React from 'react';
import Menu from './Menu';
import Footer from './Footer'
import Usuario from '../images/Fabricio.jpg'

const PerfilUsuario = () =>{
    return(
        <div>
            <header>
                <Menu/>
            </header>
            <div className='profile-container'>
            <div className="profile">
            <div className="profile-picture">
            <img src={Usuario}/>
            </div>
            <div className="profile-details">
            <h2>Nombre: Fabricio</h2>
            <h2>Apellidos: Porras Morera</h2>
            <p>Correo: fabri@example.com</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Contraseña: ********</p>
            </div>
            </div>
            </div>
            <Footer>
                <Footer/>
            </Footer>
        </div>
    );
}

export default PerfilUsuario;