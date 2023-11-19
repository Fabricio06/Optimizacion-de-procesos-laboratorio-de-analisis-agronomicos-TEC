import React, { useState } from 'react';
import add from './icons/add.png'

const BodyTable = ({ onDataSubmit }) => {
  const [data, setData] = useState(Array(12).fill({ codigoLaboratorio: '', identificacionCampo: '', analisis: '' }));

  const handleCellChange = (rowIndex, column, value) => {
    const updatedData = [...data];
    updatedData[rowIndex] = { ...updatedData[rowIndex], [column]: value };
    setData(updatedData);
  
    // Filtrar datos para asegurarse de que todas las columnas tengan contenido
    const nonEmptyData = updatedData.filter(row => 
      Object.values(row).every(cell => cell && cell.trim() !== '')
    );
    onDataSubmit(nonEmptyData);
  };
  

  const createTbody = (index) => (
    <tr key={index}>
      <td contentEditable="true" onBlur={(e) => handleCellChange(index, 'codigoLaboratorio', e.target.textContent)}></td>
      <td contentEditable="true" onBlur={(e) => handleCellChange(index, 'identificacionCampo', e.target.textContent)}></td>
      <td contentEditable="true" onBlur={(e) => handleCellChange(index, 'analisis', e.target.textContent)}></td>
    </tr>
  );

  const addTbody = () => {
    setData([...data, { codigoLaboratorio: '', identificacionCampo: '', analisis: '' }]);
  };

  return (
    <div className='body-table'>
      <form action="">
        <div className="form-table">
          <table>
            <thead>
              <tr>
                <th colSpan='1'>Código Laboratorio</th>
                <th colSpan='1'>Identificación de Campo</th>
                <th colSpan='1'>Análisis Requerido</th>
              </tr>
            </thead>
            <tbody id='cuerpo-tablas-editables'>
              {data.map((_, index) => createTbody(index))}
            </tbody>
          </table>
        </div>
        <button type="button" id='button-agregar-tablas' onClick={addTbody}>
            <img src={add} alt="Simbolo de más" />
        </button>
      </form>
    </div>
  );
};

export default BodyTable;
