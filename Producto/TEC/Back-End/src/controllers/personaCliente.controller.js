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

export const getPersonaClienteByCedula = async(req, res) => {
    try {
        const { cedula } = req.params;
        const result = await pool.query('SELECT * FROM lab.persona_cliente WHERE cedula = $1', [cedula]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//Consulta para usarse: http://localhost:3001/api/cliente/obtenerFormularioPorFiltro/parametros?cedula=12&nombre=M
export const getFormulariosPorFiltro= async (req, res) => { //Consulta para que se muestren todas las muestras relacionadas a un formulario
    try {
      const { nombre, cedula } = req.query;
      let consultaSQL = `
        SELECT
          fc.id AS formulario_id,
          fc.orden_compra AS #_orden_compra,
          fc.recibido_por AS recibido_por,
          fc.fecha_envio AS fecha_envio,
          fc.solicitud_factura AS solicitud_factura,
          fc.costo_analisis AS costo_de_analisis,
          fc.iva AS AS iva,
          fc.total_pagar AS total_a_pagar,
          fc.factura_banco AS factura_de_banco,
          pc.nombre AS nombre,
          pc.cedula AS cedula,
          pc.empresa AS nombre_empresa,
          pc.telefono AS telefono_empresa,
          pc.email_informe AS email_informe,
          pc.email_factura AS email_factura,
          pc.provincia AS provincia,
          pc.canton AS canton,
          pc.distrito AS distrito,
          pc.otras_senas AS otras_senas,
          pc.cultivo AS cultivo,
          pc.boleta AS boleta
        FROM lab.formulario fc
        JOIN lab.persona_cliente pc ON fc."clienteId" = pc.id
        WHERE 1=1
      `;
      const params = [];

      if (nombre) {
            consultaSQL += ` AND nombre ILIKE $${params.length + 1}`;
            params.push(`${nombre}%`);
        }
      if (cedula) {
            consultaSQL += ` AND cedula::text LIKE $${params.length + 1}`;
            params.push(`${cedula}%`); // Búsqueda por coincidencia inicial
        }
      const { rows } = await pool.query(consultaSQL, params);
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener formularios por filtro:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  //http://localhost:3001/api/cliente/obtenerClientesFiltro/parametros?cedula=12&nombre=M
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
        const  {cedula,nombre, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta } = req.body;
        console.log({cedula, nombre, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta })
        const result = await pool.query('INSERT INTO lab.persona_cliente (cedula,nombre, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *', [cedula,nombre, empresa, telefono, email_informe, email_factura, provincia, canton, distrito, otras_senas, cultivo, boleta])
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting cliente:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updatePersonaCliente = async(req, res) => {
    try {
        const { id } = req.params;
        const { correoInstitucional, nombre, apellido1, apellido2, autenticarId } = req.body;
        await pool.query('UPDATE lab.persona_cliente SET correoInstitucional = $1, nombre = $2, apellido1 = $3, apellido2 = $4, "autenticarId" = $5 WHERE id = $6', [correoInstitucional, nombre, apellido1, apellido2, autenticarId, id]);
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