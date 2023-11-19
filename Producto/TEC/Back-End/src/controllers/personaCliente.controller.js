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

export const getFormulariosPorCedula = async (req, res) => { //Consulta para que se muestren todas las muestras relacionadas a un formulario
    try {
      const { cedula } = req.params;
      const consultaSQL = `
        SELECT
          fc.id AS formulario_id,
          fc."clienteId" AS cliente_id,
          pc.empresa AS nombre_empresa,
          pc.
          pc.telefono AS telefono_empresa,
          pc.email_informe AS email_informe,
          pc.email_factura AS email_factura,
          pc.provincia AS provincia,
          pc.canton AS canton,
          pc.distrito AS distrito,
          pc.otras_senas AS otras_senas,
          pc.cultivo AS cultivo,
          pc.boleta AS boleta,
          m.id AS muestra_id,
          m.codigo_laboratorio AS codigo_laboratorio,
          m.identificacion_campo AS identificacion_campo,
          tm.nombre AS tipo_muestra
        FROM lab.formulario fc
        JOIN lab.persona_cliente pc ON fc."clienteId" = pc.id
        JOIN lab.muestras m ON fc.id = m."formularioId"
        JOIN lab.tipo_muestras tm ON m."tipo_muestraId" = tm.id
        WHERE pc.cedula = $1;
      `;
      const { rows } = await pool.query(consultaSQL, [cedula]);
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener formularios por cédula:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  export const getClienteFiltro = async (req, res) => {
    try {
        const { nombre, cedula } = req.query;
        let consulta = `
            SELECT *
            FROM lab.persona_cliente
            WHERE 1=1
        `;
        const params = [];

        if (nombre) {
            consulta += ` AND nombre ILIKE $${params.length + 1}`;
            params.push(`${nombre}%`);
        }
        if (cedula) {
            consulta += ` AND cedula::text LIKE $${params.length + 1}`;
            params.push(`${cedula}%`); // Búsqueda por coincidencia inicial
        }

        const { rows } = await pool.query(consulta, params);
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener clientes por filtro', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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

export const deletePersonaCliente = async(req, res) => { //Delete on cascade
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM lab.persona_cliente WHERE id = $1', [id]);
        res.json({ message: 'Tecnico eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}