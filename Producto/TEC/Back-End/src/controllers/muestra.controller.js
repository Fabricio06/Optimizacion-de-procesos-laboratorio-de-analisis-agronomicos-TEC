import {pool} from '../dbConfig.js'

export const getMuestra = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM lab.muestras');
        res.json(result.rows);
        console.log(result)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getMuestraById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM lab.muestras WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createMuestra = async (req, res) => {
    try {
        const { codigo_laboratorio, identificacion_campo, tipo_muestra, formularioId } = req.body;
        console.log({ codigo_laboratorio, identificacion_campo, tipo_muestra, formularioId })
        const result = await pool.query('INSERT INTO lab.muestras (codigo_laboratorio, identificacion_campo, "tipo_muestra", "formularioId") VALUES ($1, $2, $3, $4) RETURNING *', [codigo_laboratorio, identificacion_campo, tipo_muestra, formularioId])
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting muestra:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updateMuestra = async(req, res) => {
    try {
        const { id } = req.params;
        const { codigo_laboratorio, identificacion_campo, tipo_muestra, formularioId } = req.body;
        await pool.query('UPDATE lab.muestras SET codigo_laboratorio = $1, identificacion_campo = $2, "tipo_muestra" = $3, "formularioId" = $4 WHERE id = $5', [codigo_laboratorio, identificacion_campo, tipo_muestra, formularioId, id]);
        res.json({ message: 'Muestra actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteMuestra = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.muestras WHERE id = $1', [id]);
        res.json({ message: 'Muestra eliminada exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const crearMuestrasFormulario = async (req, res) => {
    try {
        const { formularioId } = req.params;
        const { muestras } = req.body;
  
        const insertedMuestras = await Promise.all(muestras.map(async (muestra) => {
        const { codigo_laboratorio, identificacion_campo, tipo_muestra } = muestra;
        const result = await pool.query(
            'INSERT INTO lab.muestras (codigo_laboratorio, identificacion_campo, "tipo_muestra", "formularioId") VALUES ($1, $2, $3, $4) RETURNING *',
            [codigo_laboratorio, identificacion_campo, tipo_muestra, formularioId]
        );
        return result.rows[0];
      }));
  
      res.json(insertedMuestras);
    } catch (error) {
      console.error('Error inserting muestras:', error);
      res.status(500).json({ error: error.message });
    }
}

export const getMuestrasPorFormulario = async (req, res) => { //Consulta para que se muestren todas las muestras relacionadas a un formulario
    try {
      const { id } = req.params;
      const consultaSQL = `
        SELECT
          m.id AS muestra_id,
          m.codigo_laboratorio AS codigo_laboratorio,
          m.identificacion_campo AS identificacion_campo,
          tm.nombre AS tipo_muestra
        FROM lab.formulario fc
        JOIN lab.muestras m ON fc.id = m."formularioId"
        JOIN lab.tipo_muestras tm ON m."tipo_muestra" = tm.id
        WHERE fc.id = $1;
      `;
      const { rows } = await pool.query(consultaSQL, [id]);
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener muestras por Id de formulario:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

