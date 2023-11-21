import express from 'express'
import cors from 'cors'
import personaClienteRoutes from './routes/personaCliente.routes.js'
import personaTecnicoRoutes from './routes/personaTecnico.routes.js'
import muestraRoutes from './routes/muestra.routes.js'
import formularioRoutes from './routes/formulario.routes.js'
import bcrypt from 'bcrypt'
import {pool} from './dbConfig.js'
const app = express();



app.use(cors());
app.use(express.json());

//Usar enrutador de PersonaTecnico
app.use('/api/user', personaTecnicoRoutes);

//Usar enrutador de Cliente
app.use('/api/cliente', personaClienteRoutes);

//Usar enrutador de Muestra
app.use('/api/muestra', muestraRoutes);

//Usar enrutador de Fromulario
app.use('/api/formulario', formularioRoutes);

//#region Codigo Propio del Server.js/Api
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del Laboratorio de Analisis Agronomicos');
});

/*
app.post('/login', async (req, res) => {
    const values = req.body;
    const result = await pool.query(`SELECT * FROM lab.persona_tecnico AS pt JOIN lab.autenticar AS au ON pt."autenticarId" = au.id WHERE pt.nombre = '${values['usuario']}' AND au.contrasena = '${values['contrasena']}'`);
    if (result.rows.length > 0) {
        res.json({ validado: true }); 
    } else {
        res.json({ validado: false }); 
    }
});
*/

app.post('/login', async (req, res) => {
    const { usuario, contrasena } = req.body;
    try {
        const result = await pool.query(`SELECT * FROM lab.autenticar AS au JOIN lab.persona_tecnico AS pt ON au."tecnicoId" = pt.id WHERE pt.nombre = $1`, [usuario]);

        if (result.rows.length > 0) {

            const user = result.rows[0];
            const validPassword = await bcrypt.compare(contrasena, user.contrasena);
            if (validPassword) {
                res.json({ validado: true });
            } else {
                res.json({ validado: false, mensaje: 'Credenciales inválidas' });
            }
        } else {
            res.json({ validado: false, mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error en inicio de sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
//#endregion