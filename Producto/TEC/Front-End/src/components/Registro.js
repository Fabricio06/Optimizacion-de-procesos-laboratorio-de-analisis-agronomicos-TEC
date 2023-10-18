import React from 'react';

const Registro = () => {
    return(
        <div className='container'>
            <div className='left'></div>
                <div className='right'>
                    <div className="login-form">
                        <h2>Regístrate</h2>
                        <form>
                            <div className='input-container'>
                            <label htmlFor="username">Nombre:</label>
                            <input type="text" id="username" name="username" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="last name">Primer Apellido:</label>
                            <input type="text" id="last name" name="last name" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="last name">Segundo Apellido:</label>
                            <input type="text" id="password" name="last name" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="correo">Correo:</label>
                            <input type="text" id="correo" name="correo" required />
                            </div>

                            <div className='input-container'>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required />
                            </div>

                            <div className='input-container'>
                            <button type="submit"><a href='/'>Regístrate</a></button>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
    );
}

export default Registro;