const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// Rotas
const Usuario = require('./Rotas/usuario');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/usuario', Usuario);


app.listen(4000, () => {
    console.log("Server ok!")
});