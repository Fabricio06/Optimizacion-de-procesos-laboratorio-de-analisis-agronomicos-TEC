import React from 'react';
import { useForm } from 'react-hook-form';
import './FormIngresoMuestras.css';
import HeaderTable from './FormIngresoMuestraTablaH';
import DatosCliente from './FormIngresoMuestraDatosCliente';
import BodyTable from './FormIngresoMuestrasBody';
import FooterTable from './FormIngresoMuestrasFooter';



import generatePDF, { Resolution, Margin, usePDF } from 'react-to-pdf';
const options = {
  filename: "advanced-example.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.EXTREME,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: "letter",
    // default is 'portrait'
    orientation: "landscape"
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true
    }
  }
};
 // you can use a function to return the target element besides using React refs
 const getTargetElement = () => document.getElementById("pdf-content");

 const downloadPdf = () => generatePDF(getTargetElement, options);


const SampleForm = () => {    
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const onSubmit = data => {
      // Aquí manejas los datos del formulario
      console.log(data);
  };

  const handleDataFromChild = (tableData) => {
    setValue('tablaDatos', tableData);
  };

  return (
    <div className="form-container">
       <div id='pdf-content'>
       
       <HeaderTable />
       <form onSubmit={handleSubmit(onSubmit)}>
          <DatosCliente register={register} />
          <BodyTable onDataSubmit={handleDataFromChild}/>
          <FooterTable register={register}/>
      {/* Submit Button */}
      <button type="submit">Enviar</button>
       </form>
       
       
       
       </div>
       <button onClick={downloadPdf}>Download PDF</button>
    </div>
    
  );
  
};
export default SampleForm;
