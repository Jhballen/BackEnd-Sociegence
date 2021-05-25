const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema ({

    nombre: {
        type: String,
        requiered: true,
        trim: true
    },
    descripcion: {
        type : String,
        trim: true
    }
},{
    versionKey:false,
    timestamps: true
});

var Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;