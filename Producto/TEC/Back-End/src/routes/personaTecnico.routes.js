import { Router } from 'express';
import {getPersonaTecnico, getPersonaTecnicoById, createPersonaTecnico, 
    updatePersonaTecnico, deletePersonaTecnico} from '../controllers/personaTecnico.controller.js';
const router = Router()

// Obtener todos los tecnicos 
router.get('/',getPersonaTecnico );

// Obtener un tecnico por ID
router.get('/:id',getPersonaTecnicoById );

// Crear un nuevo tecnico
router.post('/', createPersonaTecnico);

// Actualizar un tecnico
router.put('/:id', updatePersonaTecnico);

// Eliminar un tecnico
router.delete('/:id', deletePersonaTecnico);

export default router

