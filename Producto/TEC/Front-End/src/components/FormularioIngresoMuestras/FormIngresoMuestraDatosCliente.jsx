import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import { useForm } from 'react-hook-form';

import { obtenerFechaFormateada } from '../../functions/manejo_de_fechas';

const FormIngresoMuestraDatosCliente = ({ register,setValue }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const clienteSeleccionado = localStorage.getItem('clienteSeleccionado');
        if (clienteSeleccionado) {
            const datosCliente = JSON.parse(clienteSeleccionado);
            console.log(datosCliente)
            // Aquí asignas cada campo del formulario con los datos del cliente
            setValue('nombre', datosCliente.nombre);
            setValue('empresa', datosCliente.empresa);
            setValue('telefono', datosCliente.telefono);
            setValue('emailInforme', datosCliente.email_informe);
            setValue('emailFactura', datosCliente.email_factura);
            setValue('provincia', datosCliente.provincia);
            setValue('canton', datosCliente.canton);
            setValue('distrito', datosCliente.distrito);  
            setValue('otrasSenas', datosCliente.otras_senas);
            setValue('cedula', datosCliente.cedula);
            setValue('cultivo', datosCliente.cultivo);
            setValue('boleta', datosCliente.boleta);
            setValue('fecha', obtenerFechaFormateada());
            localStorage.removeItem('clienteSeleccionado');
        }
    }, [setValue]);

    const handleVincularCliente = () => {
        navigate('/seleccionar-cliente');
    };

    function ClearCliente (){
    
        setValue('nombre', "");
        setValue('empresa', "");
        setValue('telefono', "");
        setValue('emailInforme', "");
        setValue('emailFactura', "");
        setValue('provincia', "");
        setValue('canton', "");
        setValue('distrito', "");  
        setValue('otrasSenas', "");
        setValue('cedula', "");
        setValue('cultivo', "");
        setValue('boleta', "");
        }
    return (  
        <div className='FormIngresoMuestraDatosCliente'>
            <form>
                <div className='linea-1-clientes'>
                {/* Cliente */}
                    <div className="form-row">
                        <label htmlFor="cliente">CLIENTE:</label>
                        <input
                            type="text"
                            id="cliente"
                            name="cliente"
                            {...register('nombre')}/>
                    </div>

                    {/* Fecha */}
                    <div className="form-row">
                        <label htmlFor="fecha">FECHA:</label>
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            {...register('fecha')}
                        />
                    </div>
                </div>

                <div className='linea-1-clientes'>
                    {/* Empresa */}
                    <div className="form-row">
                        <label htmlFor="empresa">EMPRESA:</label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            {...register('empresa')}
                        />
                    </div>

                    {/* Boleta */}
                    <div className="form-row">
                        <label htmlFor="boleta">BOLETA:</label>
                        <input
                            type="text"
                            id="boleta"
                            name="boleta"
                            {...register('boleta')}
                        />
                    </div>
                </div>
                
                <div className='linea-2-clientes'>
                    {/* Teléfono */}
                    <div className="form-row">
                        <label htmlFor="telefono">TELÉFONO:</label>
                        <input
                            type="number"
                            id="telefono"
                            name="telefono"
                            {...register('telefono')}
                        />
                    </div>

                    {/* Email Informe */}
                    <div className="form-row">
                        <label htmlFor="emailInforme">EMAIL PARA INFORME:</label>
                        <input
                            type="email"
                            id="emailInforme"
                            name="emailInforme"
                            {...register('emailInforme')}
                        />
                    </div>

                </div>

                <div className='linea-2-clientes'>
                    {/* Cédula */}
                    <div className="form-row">
                        <label htmlFor="cedula">CÉDULA:</label>
                        <input
                            type="number"
                            id="cedula"
                            name="cedula"
                            {...register('cedula')}
                        />
                    </div>

                    {/* Email Factura */}
                    <div className="form-row">
                        <label htmlFor="emailFactura">EMAIL PARA FACTURA:</label>
                        <input
                            type="email"
                            id="emailFactura"
                            name="emailFactura"
                            {...register('emailFactura')}
                        />
                    </div>
                </div>
                
                <div className='linea-3-clientes'>
                    {/* Provincia */}
                    <div className="form-row">
                        <label htmlFor="provincia">PROVINCIA:</label>
                        <input
                            type="text"
                            id="provincia"
                            name="provincia"
                            {...register('provincia')}
                        />
                    </div>

                    {/* Cantón */}
                    <div className="form-row">
                        <label htmlFor="canton">CANTÓN:</label>
                        <input
                            type="text"
                            id="canton"
                            name="canton"
                            {...register('canton')}
                        />
                    </div>

                    {/* Distrito */}
                    <div className="form-row">
                        <label htmlFor="distrito">DISTRITO:</label>
                        <input
                            type="text"
                            id="distrito"
                            name="distrito"
                            {...register('distrito')}
                        />
                    </div>
                </div>
                {/* Otras Señas */}
                <div className='linea-4-clientes'>
                    <div className="form-row">
                        <label htmlFor="otrasSenas">OTRAS SEÑAS:</label>
                        <input
                            type="text"
                            id="otrasSenas"
                            name="otrasSenas"
                            {...register('otrasSenas')}
                        />
                    </div>
                </div>

                <div className='linea-2-clientes'>
                    {/* Cultivo */}
                    <div className="form-row">
                        <label htmlFor="cultivo">CULTIVO:</label>
                        <input
                            type="text"
                            id="cultivo"
                            name="cultivo"
                            {...register('cultivo')}
                        />
                    </div>

                    {/* Muestra Entregada */}
                    <div className="form-row">
                        <label htmlFor="muestraEntregada">MUESTRA ENTREGADA:</label>
                        <input
                            type="text"
                            id="muestraEntregada"
                            name="muestraEntregada"
                            {...register('muestraEntregada')}
                        />
                    </div>
                </div>
            </form>
            <button type='button' onClick={handleVincularCliente}>Vincular cliente</button>
            <button type='button' onClick={ClearCliente}>Limpiar espacios</button>


            <hr className='line-below-div' />
        </div>
    );
};

export default FormIngresoMuestraDatosCliente;
