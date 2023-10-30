import React, {useState} from 'react';
import axios from 'axios';

const Registro = () => {
    
    const [usuario, setUsuario] = useState('');
    const [primerApellido, setprimerApellido] = useState('');
    const [segundoApellido, setsegundoApellido] = useState('');
    const [correo, setcorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/register", {
                usuario,
                contrasena,
                correo,
                primerApellido,
                segundoApellido
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
                        <h2>Regístrate</h2>
                        <form>
                            <div className='input-container'>
                            <label htmlFor="username">Nombre:</label>
                            <input type="text" onChange={(e)=> setUsuario(e.target.value)} id="username" name="username" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="last name">Primer Apellido:</label>
                            <input type="text" onChange={(e)=> setprimerApellido(e.target.value)} id="last name" name="last name" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="last name">Segundo Apellido:</label>
                            <input type="text" onChange={(e)=> setsegundoApellido(e.target.value)} id="second last name" name="last name" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="correo">Correo:</label>
                            <input type="email" onChange={(e)=> setcorreo(e.target.value)} id="correo" name="correo" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" onChange={(e)=> setContrasena(e.target.value)} id="password" name="password" required />
                            </div>

                            <div className='input-container'>
                            <button type="submit" onClick={submit}><a href='/'>Regístrate</a></button>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
    );
}

export default Registro;