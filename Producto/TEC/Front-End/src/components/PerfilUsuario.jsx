import React from 'react';
import Menu from './Menu';
import Footer from './Footer'
import Usuario from '../images/usuario.png'


const PerfilUsuario = () =>{
    return(
        <div className='perfilUsuario'>
            <header>
                <Menu/>
            </header>
            <div className='contenedor'>
            <div class="left box-primary">
            <img className = 'image' src={Usuario}/>
            <h3 class="username text-center">Usuario 1</h3>
            <a href="#" class="btn btn-primary btn-block"><b>Guardar cambios</b></a>
            </div>
            <div className='right tab-content'>
                <form className='form-horizontal'>
                    <div className='form-group'>
                    <label for="inputName" class="col-sm-2 control-label">Nombre</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputName" placeholder="Nome"/>
                    </div>
                    <label for="inputName" class="col-sm-2 control-label">Primer Apellido</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputName" placeholder="Nome"/>
                    </div>
                    <label for="inputName" class="col-sm-2 control-label">Segundo Apellido</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputName" placeholder="Nome"/>
                    </div>
                    <label for="inputName" class="col-sm-2 control-label">Correo</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputName" placeholder="Nome"/>
                    </div>
                    <label for="inputName" class="col-sm-2 control-label">Contraseña</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputName" placeholder="Nome"/>
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default PerfilUsuario;