const mongoose = require("mongoose");

const productoMode1 = mongoose.Schema({
    nombre: {
        type: String,
        required: true

    },
    description : {
        type: Number,
        required: true

    },
    categoria: {
        type: String,
        required: true

    },
    precio: {
        type: String,
        required: true

    }

});

module.exports = mongoose.model("producto", productoMode1)