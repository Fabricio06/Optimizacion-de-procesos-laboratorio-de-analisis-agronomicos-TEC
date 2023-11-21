import React, { useState } from 'react';

const Menu = () => {
  const  [isOpen, setIsOpen] = useState(false)

  return (
        <div className='Menu'>
            <div className='nav-logo'><a className= 'logo' href="/App">Laboratorio de Análisis <strong>Agronómicos</strong></a></div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="/">Inicio</a>
                <a href="/FormularioIngresoMuestras">Formularios</a>
                <a href="/perfilUsuario">Accede al perfil</a>
            
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  );
}

export default Menu;