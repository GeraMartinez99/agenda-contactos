const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/api');
const app = express();
const port = 3000;
app.use(routes);
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

const uri = 'mongodb+srv://admin:admin@cluster0.9h7zowv.mongodb.net/agenda_contactos?retryWrites=true&w=majority';
mongoose.connect(uri, (err) => {
    if(err) {
        console.log('No se pudo conectar a la base de datos');
    }
    else {
        //Si toda mi aplicación depende de la base de datos hay que cargar la base y luego cargar la api
        console.log('Se conecto correctamente a la base de datos');
   
        app.listen(port, () => {
            console.log('app is running in port' + port);
        });
    }
});


