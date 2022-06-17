const express = require("express");
const router = express.Router();
const userMode1 = require("../models/usuarios");

//Crear un usuario
router.post("/usuarios",(req, res) => {
    const user = userMode1(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));
});
//leer todos los usuarios
router.get("/usuarios", (req, res) => {
    userMode1.find()
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));    
});
//Buscar un usuario por id
router.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userMode1.findById()
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));    
});
//Actualizar datos del usuario
router.put("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userMode1.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));
   userMode1
   .updateOne({}
)});
//Eliminar un usuario
router.delete("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    userMode1.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));    
});

module.exports = router;