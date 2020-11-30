const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

// Rotas
const Usuario = require('./Rotas/usuario');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());


app.use('/usuario', Usuario);


app.listen(4000, () => {
    console.log("Server ok!")
});