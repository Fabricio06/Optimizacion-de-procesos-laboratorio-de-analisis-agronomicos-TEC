import { Router } from 'express';
import {getPersonaCliente, getPersonaClienteById, createPersonaCliente, 
        updatePersonaCliente, deletePersonaCliente, getFormulariosPorFiltro, getClienteFiltro, getPersonaClienteByCedula} from '../controllers/personaCliente.controller.js';
const router = Router()

// Obtener todos los clientes
router.get('/', getPersonaCliente );

// Obtener un cliente por ID
router.get('/:id',getPersonaClienteById );

// Obtener un cliente por ID
router.get('/cedula/:cedula',getPersonaClienteByCedula );

// Crear un nuevo clientes
router.post('/registrarCliente', createPersonaCliente);

// Actualizar un cliente
router.put('/:id', updatePersonaCliente);

// Eliminar un cliente
router.delete('/:id', deletePersonaCliente);

// Obtener un formulario por cédula
router.get('/obtenerFormularioPorFiltro/parametros', getFormulariosPorFiltro);

router.get('/obtenerClientesFiltro/parametros', getClienteFiltro)

export default router


