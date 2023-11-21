import React, { useState } from 'react';

const FooterTable = ({register}) => {
  return (
    <div className='footer-table'>
      <form >
        <div className='footer-izquierda'>
          <div className="form-group">
            <label htmlFor="recibido">Recibido por:</label>
            <input 
              type="text" 
              id="recibido" 
              name="recibido"
              {...register('recibidoPor')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechaEnvio">Fecha de Envío:</label>
            <input 
              type="date" 
              id="fechaEnvio" 
              name="fechaEnvio"
              {...register('fechaEnvio')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="solicitudCredito">Solicitud de factura a crédito:</label>
            <input 
              type="text" 
              id="solicitudCredito" 
              name="solicitudCredito"
              {...register('solicitudDeFacturaCredito')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ordenCompra"># Orden de Compra:</label>
            <input 
              type="text" 
              id="ordenCompra" 
              name="ordenCompra"
              {...register('ordenCompra')}
            />
          </div>
        </div>
        <div className='footer-derecha'>
          <div className="form-group">
            <label htmlFor="costoAnalisis">Costo de Análisis €:</label>
            <input 
              type="number" 
              id="costoAnalisis" 
              name="costoAnalisis"
              {...register('costoAnalisis')} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="iva">2% IVA €:</label>
            <input 
              type="number" 
              id="iva" 
              name="iva"
              {...register('IVA')} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalPagar">Total a Pagar €:</label>
            <input 
              type="number" 
              id="totalPagar" 
              name="totalPagar"
              {...register('totalPagar')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="facturaBanco"># Factura y Banco:</label>
            <input 
              type="text" 
              id="facturaBanco" 
              name="facturaBanco"
              {...register('facturaBanco')}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FooterTable;
