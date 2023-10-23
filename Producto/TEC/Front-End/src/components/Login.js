import React, { useState } from 'react';

const Login = () => {
    return(
        <div className='container'>
            <div className='left'></div>
                <div className='right'>
                    <div className="login-form">
                        <h2>Análisis Agronómicos</h2>
                        <form>
                            <div className='input-container'>
                            <label htmlFor="username">Usuario:</label>
                            <input type="text" id="username" name="username"/>
                            </div>

                            <div className='input-container'>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password"/>
                            </div>
                            
                            <div className='input-container'>
                            <button type="submit"><a href='/App'>Iniciar Sesión</a></button>
                            </div>

                            <div className='input-container'>
                            <button type="submit"><a href='/Registro'>Regístrate</a></button>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
    );
}

export default Login;