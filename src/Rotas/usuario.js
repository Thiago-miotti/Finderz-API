const express = require('express');
const router = express.Router();


const Usuario = require('../models/usuario');


router.post("/cadastro", async (req, res) => {
    console.log(req.body)
    const u = req.body;


    await Usuario.cadastro(u, res);

});

router.get("/info-user", async (req, res) => {

})



module.exports = router; 