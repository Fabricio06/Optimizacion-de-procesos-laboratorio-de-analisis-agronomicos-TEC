import React, { useState } from 'react';

const DatosCliente = () => {
    const [formData, setFormData] = useState({
        cliente: '',
        fecha: '',
        empresa: '',
        boleta: '',
        telefono: '',
        emailInforme: '',
        cedula: '',
        emailFactura: '',
        provincia: '',
        canton: '',
        distrito: '',
        otrasSenas: '',
        cultivo: '',
        muestraEntregada: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the form data to a server
        console.log(formData);
    };

    return (  
        <div className='datosCliente'>
            <form onSubmit={handleSubmit}>
                {/* Cliente */}
                <div className="form-row">
                    <label htmlFor="cliente">CLIENTE:</label>
                    <input
                        type="text"
                        id="cliente"
                        name="cliente"
                        value={formData.cliente}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Fecha */}
                <div className="form-row">
                    <label htmlFor="fecha">FECHA:</label>
                    <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={formData.fecha}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Empresa */}
                <div className="form-row">
                    <label htmlFor="empresa">EMPRESA:</label>
                    <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Boleta */}
                <div className="form-row">
                    <label htmlFor="boleta">BOLETA:</label>
                    <input
                        type="text"
                        id="boleta"
                        name="boleta"
                        value={formData.boleta}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Teléfono */}
                <div className="form-row">
                    <label htmlFor="telefono">TELÉFONO:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Email Informe */}
                <div className="form-row">
                    <label htmlFor="emailInforme">EMAIL PARA INFORME:</label>
                    <input
                        type="email"
                        id="emailInforme"
                        name="emailInforme"
                        value={formData.emailInforme}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Cédula */}
                <div className="form-row">
                    <label htmlFor="cedula">CÉDULA:</label>
                    <input
                        type="text"
                        id="cedula"
                        name="cedula"
                        value={formData.cedula}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Email Factura */}
                <div className="form-row">
                    <label htmlFor="emailFactura">EMAIL PARA FACTURA:</label>
                    <input
                        type="email"
                        id="emailFactura"
                        name="emailFactura"
                        value={formData.emailFactura}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Provincia */}
                <div className="form-row">
                    <label htmlFor="provincia">PROVINCIA:</label>
                    <input
                        type="text"
                        id="provincia"
                        name="provincia"
                        value={formData.provincia}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Cantón */}
                <div className="form-row">
                    <label htmlFor="canton">CANTÓN:</label>
                    <input
                        type="text"
                        id="canton"
                        name="canton"
                        value={formData.canton}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Distrito */}
                <div className="form-row">
                    <label htmlFor="distrito">DISTRITO:</label>
                    <input
                        type="text"
                        id="distrito"
                        name="distrito"
                        value={formData.distrito}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Otras Señas */}
                <div className="form-row">
                    <label htmlFor="otrasSenas">OTRAS SEÑAS:</label>
                    <input
                        type="text"
                        id="otrasSenas"
                        name="otrasSenas"
                        value={formData.otrasSenas}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Cultivo */}
                <div className="form-row">
                    <label htmlFor="cultivo">CULTIVO:</label>
                    <input
                        type="text"
                        id="cultivo"
                        name="cultivo"
                        value={formData.cultivo}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Muestra Entregada */}
                <div className="form-row">
                    <label htmlFor="muestraEntregada">MUESTRA ENTREGADA:</label>
                    <input
                        type="text"
                        id="muestraEntregada"
                        name="muestraEntregada"
                        value={formData.muestraEntregada}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Botón de envío */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default DatosCliente;
