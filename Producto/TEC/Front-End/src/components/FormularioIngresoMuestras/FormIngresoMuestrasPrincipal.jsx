import React, { useState } from 'react';
import './FormIngresoMuestras.css'; // Assume this is the CSS file that styles your components
import HeaderTable from './FormIngresoMuestraTablaH';
import DatosCliente from './FormIngresoMuestraDatosCliente';

const SampleForm = () => {
  const [formData, setFormData] = useState({
    labCode: '',
    fieldId: '',
    requiredAnalysis: '',
    receivedBy: '',
    analysisCost: '',
    tax: '',
    totalToPay: '',
    invoiceRequest: '',
    purchaseOrder: '',
    invoiceToBank: '',
    // ... any other fields you have
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
    <div className="form-container">
       <HeaderTable />
       <DatosCliente/>

      <form action="">

        <div className="form-table">
          <table>
            <thead>
              <tr>
                <th>Código Laboratorio</th>
                <th>Identificación de Campo</th>
                <th>Análisis Requerido</th>
              </tr>
            </thead>
            <tbody>
              {/* Dynamically generate table rows based on state */}
            </tbody>
          </table>
        </div>

         {/* Footer Section */}
         <div className="footer-section">
          <div className="footer-field">
            <label htmlFor="receivedBy">Recibido por:</label>
            <input
              type="text"
              id="receivedBy"
              name="receivedBy"
              value={formData.receivedBy}
              onChange={handleInputChange}
            />
          </div>

          <div className="footer-field">
            <label htmlFor="analysisCost">Costo de Análisis €</label>
            <input
              type="text"
              id="analysisCost"
              name="analysisCost"
              value={formData.analysisCost}
              onChange={handleInputChange}
            />
          </div>

          <div className="footer-field">
            <label htmlFor="tax">2% IVA €</label>
            <input
              type="text"
              id="tax"
              name="tax"
              value={formData.tax}
              onChange={handleInputChange}
            />
          </div>

          <div className="footer-field">
            <label htmlFor="totalToPay">Total a Pagar €</label>
            <input
              type="text"
              id="totalToPay"
              name="totalToPay"
              value={formData.totalToPay}
              onChange={handleInputChange}
            />
          </div>

          {/* ... Add other footer fields in similar fashion */}
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <input type="submit" value="Enviar" className="submit-button" />
        </div>
      </form>
    </div>
  );
};

export default SampleForm;
