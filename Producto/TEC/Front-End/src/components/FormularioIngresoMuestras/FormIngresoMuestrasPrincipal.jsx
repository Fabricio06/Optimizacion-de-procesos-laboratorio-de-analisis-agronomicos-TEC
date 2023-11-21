import React, {useRef} from 'react';
import { useForm, setValue } from 'react-hook-form';
import './FormIngresoMuestras.css';
import HeaderTable from './FormIngresoMuestraTablaH';
import DatosCliente from './FormIngresoMuestraDatosCliente';
import BodyTable from './FormIngresoMuestrasBody';
import FooterTable from './FormIngresoMuestrasFooter';

import { exportarAPDF, exportarAImagen, exportarAExcel, 
        exportarADocx, ExportarAImpresora } from '../../functions/exports/exportaciones_de_archivos';

const SampleForm = () => {  
  const pdfContentRef = useRef(null);
  const { register, handleSubmit, formState: { errors }, setValue , getValues} = useForm();
  const handleDataFromChild = (tableData) => {
    setValue('tablaDatos', tableData);
  };


  function procesarExportacion(elementId, newStyles, tipoExportacion) {
    const element = document.getElementById(elementId);
    if (element) {
      // Guardar los estilos originales
      let originalStyles = {};
      for (const key in newStyles) {
        originalStyles[key] = element.style[key];
      }
  
      // Aplicar los nuevos estilos
      for (const key in newStyles) {
        element.style[key] = newStyles[key];
      }
      switch (tipoExportacion) {
        case "PDF":
          exportarAPDF(pdfContentRef);
          break;
        case "IMG":
          exportarAImagen(pdfContentRef, 'png', 'ImagenExportada');
          break;
        case "EXCEL":
          exportarAExcel(obtenerDatosParaExportar(), "DatosExportados");
          break;
        case "DOCX":
          exportarADocx(obtenerDatosParaExportar(), "Documento");
          break;
        default:
          alert('Tipo de exportación no reconocida');
          break;
      }
      
  
      // Restablecer los estilos originales
      for (const key in originalStyles) {
        element.style[key] = originalStyles[key];
      }
    } else {
      console.error(`Elemento con id '${elementId}' no encontrado`);
    }
  }

  
  const obtenerDatosParaExportar = () => {
    const formData = getValues(); // Obtiene los datos del formulario
    return formData;
  };
  
  const realizarPeticionConJSON = async (url, datos) => {
    try {
      const respuesta = await fetch(url, {
        method: 'POST', // o 'PUT' si estás actualizando datos
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
  
      if (!respuesta.ok) {
        throw new Error(`Error en la respuesta: ${respuesta.status}`);
      }
  
      const resultado = await respuesta.json();
      return resultado;
    } catch (error) {
      console.error('Error en la petición fetch:', error);
      throw error; // Lanzar el error para manejarlo en una lógica superior
    }
  };
  const realizarPeticionesConRollback = async () => {
    try {
      const valores = obtenerDatosParaExportar();
      let respuestaClienteExistente = await fetch(`http://localhost:3001/api/cliente/cedula/${valores.cedula}`);
      let clienteExistente = false;
  
      if (respuestaClienteExistente.ok) {
        try {
          const datosCliente = await respuestaClienteExistente.json();
          clienteExistente = datosCliente != null; // Ahora 'clienteExistente' se puede reasignar sin problemas
        } catch (error) {
          // Error al analizar JSON, probablemente porque no hay cuerpo en la respuesta
          clienteExistente = false;
        }
      }
      console.log(clienteExistente.ok);
      console.log(respuestaClienteExistente);
      console.log(valores)
      
      if(!clienteExistente){
        await realizarPeticionConJSON('http://localhost:3001/api/cliente/registrarCliente', {
            cedula: valores.cedula,
            nombre: valores.nombre,
            empresa: valores.empresa,
            telefono: valores.telefono,
            email_informe: valores.emailInforme,
            email_factura: valores.emailFactura,
            provincia: valores.provincia,
            canton: valores.canton,
            distrito: valores.distrito,
            otras_senas: valores.otrasSenas,
            cultivo: valores.cultivo,
            boleta: valores.boleta
        });
    }

    const formularioId = await realizarPeticionConJSON('http://localhost:3001/api/formulario/crearFormulario', 
    { cliente_id: valores.cedula, 
      recibido_por: valores.recibidoPor,
      fecha_envio: valores.fechaEnvio, 
      solicitud_factura: valores.solicitudDeFacturaCredito, 
      orden_compra: valores.ordenCompra, 
      costo_analisis: valores.costoAnalisis, 
      iva: valores.IVA, 
      total_pagar: valores.totalPagar, 
      factura_banco: valores.facturaBanco });

     for (const element of valores.tablaDatos) {
        await realizarPeticionConJSON('http://localhost:3001/api/muestra/crearMuestra', 
        { codigo_laboratorio: element.codigoLaboratorio,
          identificacion_campo: element.identificacionCampo,
          tipo_muestra: element.analisis,
          formularioId: formularioId.id,
        });
    }
      
      
      //const resultado2 = await realizarPeticionConJSON('URL2', { /* datos para URL2 */ });
      
      // Continuar con la lógica si todas las peticiones son exitosas
  
    } catch (error) {
      throw error;
    }
  };
  
    

  return (
    <div className="form-container">
       <div ref={pdfContentRef}  id='contenido-exportar'>
       
       <HeaderTable />
       <form onSubmit={handleSubmit(realizarPeticionesConRollback)}>
          <DatosCliente register={register} setValue={setValue} />
          <BodyTable onDataSubmit={handleDataFromChild}/>
          <FooterTable register={register}/>
      {/* Submit Button */}
      <button type="submit">Enviar</button>
       </form>
       
       </div>
       <button onClick={ExportarAImpresora}>Imprimir PDF</button>
       <button onClick={() => procesarExportacion("contenido-exportar", { width: "900px" }, "PDF")}>Exportar a PDF</button>
       <button onClick={() => procesarExportacion("contenido-exportar", { width: "900px" }, "EXCEL")}>Exportar a Excel</button>
       <button onClick={() => procesarExportacion("contenido-exportar", { width: "900px" }, "DOCX")}>Exportar a Word</button>
       <button onClick={() => procesarExportacion("contenido-exportar", { width: "900px" }, "IMG")}>Exportar como Imagen</button>
    </div>
    
  );
  
};
export default SampleForm;
