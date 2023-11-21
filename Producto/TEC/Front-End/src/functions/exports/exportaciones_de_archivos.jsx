import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';


/**
 * Funcion encargada de exportar la referencia de un doc a imagen png
 * @param {En} 'Referencia del elemento' 
 * @param {*} format 
 * @param {*} fileName 
 */
export const exportarAImagen = (elementRef, format = 'png', fileName = 'image') => {
    html2canvas(elementRef.current).then(canvas => {
      const dataURL = canvas.toDataURL(`image/${format}`);
      saveAs(dataURL, `${fileName}.${format}`);
    });
  };

/**
 * Funcion encargada de exportar para imprimir la referencia de un doc
 * @param {*} referencia 
 * @returns 
 */
export const ExportarAImpresora = (referencia) => {
  return useReactToPrint({
    content: () => referencia.current,
  });
};


/**
 * Funcion encargada de exportar la referencia de un doc a pdf 
 * @param {*} 'Referencia del pdf' 
 */
export const exportarAPDF = (referencia) => {
  const pdfWidth = 200; // Ancho deseado para el PDF en milímetros
  const scaleFactor = 2; // Escala fija para la captura del canvas

  html2canvas(referencia.current, {
    scale: scaleFactor, // Usar una escala fija
    useCORS: true // Para manejar contenido externo, si es necesario
  }).then(canvas => {
    const canvasAspectRatio = canvas.height / canvas.width;
    const pdfHeight = pdfWidth * canvasAspectRatio;

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      unit: 'mm',
      format: [pdfWidth, pdfHeight] // Establecer formato personalizado
    });

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("formulario.pdf");
  });
};


export const exportarAExcel = (data, fileName) => {
  // Crear una hoja para los datos principales
  if(!data.tablaDatos){
    alert('Tabla vacía')
    return;
  }
  const mainData = { ...data };
  delete mainData.tablaDatos; // Excluir la tabla de datos anidados para evitar duplicados
  const mainWorksheet = XLSX.utils.json_to_sheet([mainData]); // Convertir a arreglo para mantener la consistencia

  // Crear una hoja para los datos anidados
  const nestedDataWorksheet = XLSX.utils.json_to_sheet(data.tablaDatos);

  // Crear un nuevo libro de trabajo y agregar las dos hojas
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, mainWorksheet, "Datos Principales");
  XLSX.utils.book_append_sheet(workbook, nestedDataWorksheet, "Datos de la tabla");

  // Guardar el libro de trabajo en un archivo
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const exportarADocx = (data, fileName) => {
  // Crear el contenido HTML que imita la estructura de la página
  let htmlContent = `
  <html>
    <head>
      <style>
        body { font-family: 'Arial', sans-serif; }
        .container { width: 100%; }
        .header, .footer { margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; }
        table, th, td { border: 1px solid black; }
        th, td { padding: 8px; text-align: left; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <!-- Aquí irían los datos del cliente, etc. -->
        </div>
        <table>
          <thead>
            <tr>
              <!-- Encabezados de la tabla -->
            </tr>
          </thead>
          <tbody>
            <!-- Filas de la tabla -->
          </tbody>
        </table>
        <div class="footer">
          <!-- Aquí irían los datos del pie de página, como el total a pagar, etc. -->
        </div>
      </div>
    </body>
  </html>`;

  // Agregar datos reales del objeto 'data' al HTML
  // ...

  // Convertir HTML a Blob DOCX y guardar
  const docx = htmlDocx.asBlob(htmlContent);
  saveAs(docx, `${fileName}.docx`);
};
