import { Router } from 'express';
//const router = express.Router();
//const { Pool } = require('pg');
//const pool = require('../dbConfig'); // Importa la configuración de la base de datos

import {getPersonaCliente,getPersonaClienteById, createPersonaCliente, updatePersonaCliente, deletePersonaCliente} from '../controllers/personaCliente.controller.js';

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

export default router


