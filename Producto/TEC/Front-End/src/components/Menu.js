// src/Menu.js
import React from 'react';

const Menu = () => {
  return (
        <div className='menu'>
            <a href="/App">Laboratorio de Análisis <strong>Agronómicos</strong></a>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="#">Formularios</a></li>
                <li><a href="#">Accede al perfil</a></li>
            </ul>
        </div>
  );
}

export default Menu;