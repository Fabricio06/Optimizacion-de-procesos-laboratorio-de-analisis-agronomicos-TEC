import express from 'express'
import cors from 'cors'
import personaClienteRoutes from './routes/personaCliente.routes.js'
import personaTecnicoRoutes from './routes/personaTecnico.routes.js'

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

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
//#endregion