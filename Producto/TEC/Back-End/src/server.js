import express from 'express'
import cors from 'cors'
import personaClienteRoutes from './routes/personaCliente.routes.js'
import personaTecnicoRoutes from './routes/personaTecnico.routes.js'

import {pool} from './dbConfig.js'
const app = express();



app.use(cors());
app.use(express.json());

//Usar enrutador de PersonaTecnico
app.use('/api/register', personaTecnicoRoutes);

//Usar enrutador de Cliente
app.use('/api/cliente', personaClienteRoutes);

//#region Codigo Propio del Server.js/Api
app.get('/', (req, res) => {
    res.send('Bienvenido a la API del Laboratorio de Analisis Agronomicos');
});

app.post('/login', async (req, res) => {
    const values = req.body;
    const result = await pool.query(`SELECT * FROM lab.persona_tecnico AS pt JOIN lab.autenticar AS au ON pt."autenticarId" = au.id WHERE pt.nombre = '${values['usuario']}' AND au.contrasena = '${values['contrasena']}'`);
    if (result.rows.length > 0) {
        res.json({ validado: true }); 
    } else {
        res.json({ validado: false }); 
    }
});

app.post('/register', async (req, res) => {
    try{
    const values = req.body;
    console.log(values['contrasena'])
    const result = await pool.query(`INSERT INTO lab.autenticar(contrasena) VALUES ('${values['contrasena']}'); INSERT INTO lab.persona_tecnico ("correoInstitucional", nombre, apellido1, apellido2, "autenticarId") VALUES('${values['correo']}','${values['usuario']}','${values['primerApellido']}', '${values['segundoApellido']}', '3')`);
    res.json({ validado: true });     
    }catch(e){
        console.log(e)
        res.json({ validado: false }); 
    }
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
//#endregion