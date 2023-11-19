import { Router } from 'express';
import {getMuestra, getMuestraById, createMuestra, 
    updateMuestra, deleteMuestra, crearMuestrasFormulario, getMuestrasPorFormulario} from '../controllers/muestra.controller.js';
const router = Router()

// Obtener todas las muestras 
router.get('/',getMuestra );

// Obtener una muestra por ID
router.get('/:id',getMuestraById );

// Obtener un muestras por formulario
router.get('/obtenerMuestrasPorFormulario/:id', getMuestrasPorFormulario);

// Crear un nueva muestra
router.post('/crearMuestra', createMuestra);

// Crear muestras para un formulario
router.post('/:formularioId/muestras', crearMuestrasFormulario)

// Actualizar una muestra
router.put('/:id', updateMuestra);

// Eliminar una muestra
router.delete('/:id', deleteMuestra);

export default router