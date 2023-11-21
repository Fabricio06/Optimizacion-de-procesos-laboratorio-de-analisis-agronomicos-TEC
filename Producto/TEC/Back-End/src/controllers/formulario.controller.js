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
        const { cliente_id, recibido_por, fecha_envio, solicitud_factura, orden_compra, costo_analisis, iva, total_pagar, factura_banco } = req.body;
        console.log({ cliente_id, recibido_por, fecha_envio, solicitud_factura, orden_compra, costo_analisis, iva, total_pagar, factura_banco });

        const query = `
            INSERT INTO lab.formulario 
            ("cliente_id", "recibido_por", "fecha_envio", "solicitud_factura", "orden_compra", "costo_analisis", "iva", "total_pagar", "factura_banco") 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
            RETURNING *`;

        const values = [cliente_id, recibido_por, fecha_envio, solicitud_factura, orden_compra, costo_analisis, iva, total_pagar, factura_banco];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting formulario:', error);
        res.status(500).json({ error: error.message });
    }
};
export const updateFormulario = async(req, res) => {
    try {
        const { id } = req.params;
        const { cliente_id } = req.body;
        await pool.query('UPDATE lab.formulario SET "cliente_id" = $1 WHERE id = $2', [cliente_id, id]);
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