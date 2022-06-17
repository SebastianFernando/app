const mongoose = require("mongoose");

const userMode1 = mongoose.Schema({
    nombre: {
        type: String,
        required: true

    },
    edad : {
        type: Number,
        required: true

    },
    correo: {
        type: String,
        required: true

    }

});

module.exports = mongoose.model("Usuarios", userMode1)