const express = require("express");
const producto = require("../models/producto");
const router = express.Router();
const productoMode1 = require("../models/producto");

//Vender un producto
router.post("/Producto",(req, res) => {
    const user = productoMode1(req.body);
    producto.save()
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));
});
//leer todos los productos
router.get("/Producto", (req, res) => {
    productoMode1.find()
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));    
});
//Buscar un producto
router.get("/Producto/:id", (req, res) => {
    const {id} = req.params;
    productoMode1.findById()
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));    
});
//Actualizar el producto
router.put("/Producto/:id", (req, res) => {
    const {id} = req.params;
    productoMode1.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));
   productoMode1
   .updateOne({}
)});
//Eliminar un producto
router.delete("/Producto/:id", (req, res) => {
    const {id} = req.params;
    productoMode1.deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json ({mensaje: error}));    
});

module.exports = router;