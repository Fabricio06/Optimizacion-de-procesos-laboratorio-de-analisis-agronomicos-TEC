import {pool} from '../dbConfig.js'

export const getPersonaCliente = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lab.persona_cliente');
        res.json(result.rows);
        console.log(result)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getPersonaClienteById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM lab.persona_cliente WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createPersonaCliente = async(req, res) => {
    try {
        const { cedula, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta } = req.body;
        console.log({ cedula, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta })
        const result = await pool.query('INSERT INTO lab.persona_cliente (cedula, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *', [cedula, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta])
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting tecnico:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updatePersonaCliente = async(req, res) => {
    try {
        const { id } = req.params;
        const { correoInstitucional, nombre, apellido1, apellido2, autenticarId } = req.body;
        await pool.query('UPDATE lab.persona_cliente SET correoInstitucional = $1, nombre = $2, apellido1 = $3, apellido2 = $4, autenticarId = $5 WHERE id = $6', [correoInstitucional, nombre, apellido1, apellido2, autenticarId, id]);
        res.json({ message: 'Tecnico actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deletePersonaCliente = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.persona_cliente WHERE id = $1', [id]);
        res.json({ message: 'Tecnico eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}