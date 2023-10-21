const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const moment = require('moment');
const pool = require('./dbConfig'); // Importa la configuración de la base de datos


// Obtener todos los libros
router.get('/', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lab.libro');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Obtener un libro por ID
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM lab.libro WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Crear un nuevo libro
router.post('/', async(req, res) => {
    try {
        let { titulo, autor, descripcion, publicado } = req.body;
        console.log({ titulo, autor, descripcion, publicado });
        // Formatear la fecha a 'DD/MMM/YYYY' usando moment.js
        const fechaFormateada = publicado ? moment(publicado, 'YYYY-MM-DD').format('DD/MM/YYYY') : null;
        console.log(fechaFormateada);
        const result = await pool.query('INSERT INTO lab.libro (titulo, autor, descripcion, publicado) VALUES ($1, $2, $3, $4) RETURNING *', [titulo, autor, descripcion, fechaFormateada]);


        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting libro:', error);
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un libro
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { titulo, autor, descripcion, publicado } = req.body;
        await pool.query('UPDATE lab.libro SET titulo = $1, autor = $2, descripcion = $3, publicado = $4 WHERE id = $5', [titulo, autor, descripcion, publicado, id]);
        res.json({ message: 'Libro actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Eliminar un libro
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.libro WHERE id = $1', [id]);
        res.json({ message: 'Libro eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;