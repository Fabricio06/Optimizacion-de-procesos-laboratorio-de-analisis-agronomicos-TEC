import React, { useEffect, useRef, useState} from 'react';
import { useForm} from 'react-hook-form';
import './FormIngresoMuestras.css';
import HeaderTable from './FormIngresoMuestraTablaH';
import DatosCliente from './FormIngresoMuestraDatosCliente';
import BodyTable from './FormIngresoMuestrasBody';
import FooterTable from './FormIngresoMuestrasFooter';
import { useNavigate } from 'react-router-dom';  
import { useReactToPrint } from 'react-to-print';

import { exportarAPDF, exportarAImagen, exportarAExcel, 
        exportarADocx } from '../../functions/exports/exportaciones_de_archivos';
import { useLocation } from 'react-router-dom';
import { obtenerFechaFormateada } from '../../functions/manejo_de_fechas';
const SampleForm = () => {  
  const [formularioDatos, setFormularioDatos] = useState(null);
  const location = useLocation();
  const formulario = location.state?.formulario;
  const navigate = useNavigate();
  const pdfContentRef = useRef(null);
  const { register, handleSubmit, setValue , getValues,  formState: { errors }} = useForm();
  const handleDataFromChild = (tableData) => {
    setValue('tablaDatos', tableData);
  };
  const volver = () => {
    navigate('/App');
  };
  const handlePrint = useReactToPrint({
    content: () => pdfContentRef.current,
  });

  useEffect(() => {
    if (formulario) {
      console.log(formulario)
      ocultarElementos()
      setValue('recibidoPor', formulario.recibido_por);
      setValue('fechaEnvio', obtenerFechaFormateada(formulario.fecha_envio));
      setValue('solicitudDeFacturaCredito', formulario.solicitud_factura);
      setValue('ordenCompra', formulario.orden_compra);
      setValue('costoAnalisis', formulario.costo_analisis);
      setValue('IVA', formulario.iva);
      setValue('totalPagar', formulario.total_pagar);
      setValue('facturaBanco', formulario.factura_banco);
      setValue('ordenCompra', formulario.orden_compra);
      setValue('nombre', formulario.nombre);
      setValue('empresa', formulario.empresa);
      setValue('telefono', formulario.telefono_empresa);
      setValue('emailInforme', formulario.email_informe);
      setValue('emailFactura', formulario.email_factura);
      setValue('provincia', formulario.provincia);
      setValue('canton', formulario.canton);
      setValue('distrito', formulario.distrito);  
      setValue('otrasSenas', formulario.otras_senas);
      setValue('cedula', formulario.cedula);
      setValue('cultivo', formulario.cultivo);
      setValue('boleta', formulario.boleta);
      setValue('fecha', obtenerFechaFormateada());


        
    }
}, [formulario, setValue]);


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
      ocultarElementos(); // Ocultar antes de exportar;
      switch (tipoExportacion) {
        case "IMPRIMIR":
          handlePrint({content: () => pdfContentRef.current,});
          break;
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
      mostrarElementos(); // Mostrar después de exportar
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
      if(valores.tablaDatos==null){
        alert('tienes que llenar por lo menos una tabla');
        return;
      }
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
    alert('Guardado Correctamente');
    volver();
      
    } catch (error) {
      throw error;
    }
  };
  function manejarExportacion(event) {
    const opcion = event.target.value;
    switch (opcion) {
      case 'imprimir':
        procesarExportacion("contenido-exportar", { width: "900px" }, "IMPRIMIR")
        break;
      case 'pdf':
        procesarExportacion("contenido-exportar", { width: "900px" }, "PDF");
        break;
      case 'excel':
        procesarExportacion("contenido-exportar", { width: "900px" }, "EXCEL");
        break;
      case 'word':
        procesarExportacion("contenido-exportar", { width: "900px" }, "DOCX");
        break;
      case 'imagen':
        procesarExportacion("contenido-exportar", { width: "900px" }, "IMG");
        break;
      default:
        console.log("Opción no reconocida");
    }
  }
  
  const ocultarElementos = () => {
    const elementosOcultar = [
      'button-agregar-tablas',
      'vincular-cliente-boton',
      'limpiar-datos-cliente-boton',
      'opcionesExport',
      'guardar-boton',
      'boton-volver',
    ];
  
    elementosOcultar.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        // Guardar el estilo original
        element.dataset.originalStyle = element.style.cssText;
  
        // Ocultar el elemento
        element.style.display = "none";
      }
    });
  };
  
  // Función para mostrar los elementos nuevamente
  const mostrarElementos = () => {
    const elementosMostrar = [
      'button-agregar-tablas',
      'vincular-cliente-boton',
      'limpiar-datos-cliente-boton',
      'opcionesExport',
      'guardar-boton',
      'boton-volver',
    ];
  
    elementosMostrar.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        // Restaurar el estilo original
        const originalStyle = element.dataset.originalStyle;
        if (originalStyle) {
          element.style.cssText = originalStyle;
        } else {
          // Si no hay estilo original, mostrar el elemento de manera predeterminada
          element.style.display = "";
        }
      }
    });
    


  };
  

  return (
    <div className="form-container">
       <div ref={pdfContentRef}  id='contenido-exportar'>
       
       <HeaderTable />
       <form onSubmit={handleSubmit(realizarPeticionesConRollback)}>
          <DatosCliente register={register} setValue={setValue}  />
          <BodyTable onDataSubmit={handleDataFromChild}/>
          <FooterTable register={register} />
      {/* Submit Button */}
        <div className='form-botton-container'>
          <button id='guardar-boton'  className='botonClientes' type="submit">Guardar</button>
        </div>
       </form>
       
       </div>

       <div className='.botonesFinales' style={{display: 'flex' }}>
       <div style={{ paddingRight: '30px', display: 'flex' }}>
        <button onClick={volver} className='botonClientes' id='boton-volver'  type='button'>Volver</button>
        </div>

       <div className='botonesExportaciones'>
        <select name="opcionesExport" id="opcionesExport" onChange={manejarExportacion}>
          <option selected>Exportar a:</option>
          <option value="imprimir">Imprimir PDF</option>
          <option value="pdf">Exportar a PDF</option>
          <option value="excel">Exportar a Excel</option>
          <option value="word">Exportar a Word</option>
          <option value="imagen">Exportar como Imagen</option>
        </select>
        </div>
      </div>
    </div>
    
  );
  
};
export default SampleForm;
