import { Router } from 'express';
import {getPersonaCliente, getPersonaClienteById, createPersonaCliente, 
        updatePersonaCliente, deletePersonaCliente, getFormulariosPorCedula, getClienteFiltro} from '../controllers/personaCliente.controller.js';
const router = Router()

// Obtener todos los clientes
router.get('/', getPersonaCliente );

// Obtener un cliente por ID
router.get('/:id',getPersonaClienteById );

// Crear un nuevo clientes
router.post('/registrarCliente', createPersonaCliente);

// Actualizar un cliente
router.put('/:id', updatePersonaCliente);

// Eliminar un cliente
router.delete('/:id', deletePersonaCliente);

// Obtener un formulario por cédula
router.get('/obtenerFormularioPorCedula/:cedula', getFormulariosPorCedula);

router.get('/obtenerClientesFiltro/parametros', getClienteFiltro)

export default router


