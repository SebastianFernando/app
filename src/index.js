//Llamada de paquetes
const express = require("express");
const mongoose = require("mongoose");
const usuarios = require("./routes/usuarios");
const producto = require("./routes/producto");
require("dotenv").config();
//Inicializando variables
const app = express();
const port = 9000;

//configuraciones
app.use(express.json());
app.use("/api", usuarios);

//Rutas
app.get("/", (req, res) => {
  res.send("Bienvenido al Api Rest de Usuarios");
});

//test MongoDB
mongoose.connect(process.env.mongodb_conexion)
  .then(() => console.log("Conexion realizada a MongoDBAtlas"))
  .catch((error) => console.log(error))

//Servidor 
app.listen(9000, () => console.log("Servidor escuchando en el puerto", port));

