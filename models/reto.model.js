const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const retoSchema = new Schema ({

    titulo: {
        type: String,
        requiered: true,
        trim: true
    },
    descripcion: {
        type : String,
        trim: true
    },
    user: {
        type: Schema.ObjectId, ref: "User"
    },
    categoria: {
        type: Schema.ObjectId, ref: "Categoria"
    }
},{
    versionKey:false,
    timestamps: true
});

var Reto = mongoose.model('Reto', retoSchema);

module.exports = Reto;