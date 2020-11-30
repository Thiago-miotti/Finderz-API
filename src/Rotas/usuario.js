const express = require('express');
const router = express.Router();


const Usuario = require('../models/usuario');


router.post("/cadastro", async (req, res) => {
    const u = req.body;
    
    console.log(u)

    // res.send('oke');
    await Usuario.cadastro(u, res);

});


module.exports = router; 