import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    async function submit(e) {
        e.preventDefault();

        if (!usuario || !contrasena) {
            console.log('Por favor, completa ambos campos.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/login", {
                usuario,
                contrasena
            });

            if (response.data.validado) {
                // Redirige al usuario a la página de la aplicación.
                window.location.href = '/App';
            } else {
                console.log('Credenciales incorrectas');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div className='container'>
            <div className='left'></div>
                <div className='right'>
                    <div className="login-form">
                        <h2>Análisis Agronómicos</h2>
                        <form action='POST'>
                            <div className='input-container'>
                            <label htmlFor="username">Usuario:</label>
                            <input type="text" onChange={(e)=> setUsuario(e.target.value)} id="username" name="username"/>
                            </div>

                            <div className='input-container'>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" onChange={(e)=> setContrasena(e.target.value)} id="password" name="password"/>
                            </div>
                            
                            <div className='input-container'>
                            <button type="submit" onClick={submit}><a href='/App'>Iniciar Sesión</a></button>
                            </div>
                        </form>
                        <div className='input-container'>
                            <button type="submit"><a href='/Registro'>Regístrate</a></button>
                            </div>
                    </div>
                </div>
    </div>
    );

}

export default Login;