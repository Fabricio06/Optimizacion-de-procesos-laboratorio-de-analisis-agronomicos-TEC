import express from 'express'
import cors from 'cors'
import personaClienteRoutes from './routes/personaCliente.routes.js'
//const express = require('express');
//const cors = require('cors');

const app = express();



//const personaTecnicoRoutes = require('./routes/personaTecnicoRoutes');
//const personaClienteRoutes = require('./routes/personaClienteRoutes')

app.use(cors());
app.use(express.json());

//Usar enrutador de PersonaTecnico
//app.use('/api/register', personaTecnicoRoutes);



console.log("fasf")



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