import { Router } from 'express';
import {getFormulario, getFormularioById, createFormulario, 
    updateFormulario, deleteFormulario} from '../controllers/formulario.controller.js';
const router = Router()

// Obtener todas las Formularios 
router.get('/',getFormulario );

// Obtener una Formulario por ID
router.get('/:id',getFormularioById );

// Crear un nueva Formulario
router.post('/crearFormulario', createFormulario);

// Actualizar una Formulario
router.put('/:id', updateFormulario);

// Eliminar una Formulario
router.delete('/:id', deleteFormulario);

export default router