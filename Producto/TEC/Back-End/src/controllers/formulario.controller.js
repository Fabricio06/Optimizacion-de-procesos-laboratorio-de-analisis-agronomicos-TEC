import {pool} from '../dbConfig.js'

export const getFormulario = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lab.formulario');
        res.json(result.rows);
        console.log(result)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getFormularioById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM lab.formulario WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createFormulario = async (req, res) => {
    try {
        const { clienteId } = req.body;
        console.log({ clienteId })
        const result = await pool.query('INSERT INTO lab.formulario ("clienteId") VALUES ($1) RETURNING *', [clienteId])
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting formulario:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updateFormulario = async(req, res) => {
    try {
        const { id } = req.params;
        const { clienteId } = req.body;
        await pool.query('UPDATE lab.formulario SET "clienteId" = $1 WHERE id = $2', [clienteId, id]);
        res.json({ message: 'Formulario actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteFormulario = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.formulario WHERE id = $1', [id]);
        res.json({ message: 'Formulario eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}