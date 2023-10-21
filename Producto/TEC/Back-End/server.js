const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const moment = require('moment');
const app = express();


const librosRoutes = require('./libroRoutes');
const personaTecnicoRoutes = require('./personaTecnicoRoutes');

app.use(cors());
app.use(bodyParser.json());


//Usar enrutador de libros
app.use('/api/libros', librosRoutes);

//Usar enrutador de PersonaTecnico
app.use('/api/register', personaTecnicoRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Manejo de Libros');
});


app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});