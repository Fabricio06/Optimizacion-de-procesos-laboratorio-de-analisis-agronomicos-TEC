import {pool} from '../dbConfig.js'

export const getPersonaTecnico = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lab.persona_tecnico');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getPersonaTecnicoById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM lab.persona_tecnico WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createPersonaTecnico = async(req, res) => {
    try {
        let { correoInstitucional, nombre, apellido1, apellido2, autenticarId } = req.body;
        console.log({ correoInstitucional, nombre, apellido1, apellido2, autenticarId });
        const result = await pool.query('INSERT INTO lab.persona_tecnico (correoInstitucional,nombre,apellido1,apellido2,autenticarId) VALUES ($1, $2, $3, $4, $5) RETURNING *', [correoInstitucional, nombre, apellido1, apellido2, autenticarId]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting tecnico:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updatePersonaTecnico = async(req, res) => {
    try {
        const { id } = req.params;
        const { correoInstitucional, nombre, apellido1, apellido2, autenticarId } = req.body;
        await pool.query('UPDATE lab.persona_tecnico SET correoInstitucional = $1, nombre = $2, apellido1 = $3, apellido2 = $4, autenticarId = $5 WHERE id = $6', [correoInstitucional, nombre, apellido1, apellido2, autenticarId, id]);
        res.json({ message: 'Tecnico actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deletePersonaTecnico = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.persona_tecnico WHERE id = $1', [id]);
        res.json({ message: 'Tecnico eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}