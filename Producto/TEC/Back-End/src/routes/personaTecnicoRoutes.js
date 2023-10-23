const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const moment = require('moment');
const pool = require('../dbConfig'); // Importa la configuración de la base de datos


// Obtener todos los tecnicos 
router.get('/', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lab.persona_tecnico');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Obtener un tecnico por ID
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM lab.persona_tecnico WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Crear un nuevo tecnico
router.post('/', async(req, res) => {
    try {
        let { correoInstitucional, nombre, apellido1, apellido2, autenticarId } = req.body;
        console.log({ correoInstitucional, nombre, apellido1, apellido2, autenticarId });
        const result = await pool.query('INSERT INTO lab.persona_tecnico (correoInstitucional,nombre,apellido1,apellido2,autenticarId) VALUES ($1, $2, $3, $4, $5) RETURNING *', [correoInstitucional, nombre, apellido1, apellido2, autenticarId]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting tecnico:', error);
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un tecnico
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { correoInstitucional, nombre, apellido1, apellido2, autenticarId } = req.body;
        await pool.query('UPDATE lab.persona_tecnico SET correoInstitucional = $1, nombre = $2, apellido1 = $3, apellido2 = $4, autenticarId = $5 WHERE id = $6', [correoInstitucional, nombre, apellido1, apellido2, autenticarId, id]);
        res.json({ message: 'Tecnico actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Eliminar un tecnico
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.persona_tecnico WHERE id = $1', [id]);
        res.json({ message: 'Tecnico eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;


