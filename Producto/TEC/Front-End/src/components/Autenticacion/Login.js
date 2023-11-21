import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AutenticacioRequerida';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Utilizar useAuth
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    async function submit(e) {
        e.preventDefault();

        if (!usuario || !contrasena) {
            console.log('Por favor, completa los espacios de campos.');
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/login", {
                usuario,
                contrasena
            });
            console.log(response)
            if (response.data.validado) {
                login({ usuario }); // Actualizar estado de autenticación
                navigate('/App');
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
                            <button type="submit" onClick={submit}><a href='../App'>Iniciar Sesión</a></button>
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