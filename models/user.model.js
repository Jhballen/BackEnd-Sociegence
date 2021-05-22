const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({

    username: {
        type: String,
        requiered: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        trim: true
    },
    nombre: {
        type : String,
        trim: true
    },
    IdTipo: {
        type: String,
    },
    IdNumero: {
        type: Number
    },
    Telefono: {
        type: Number
    },
    contrasena: {
        type: String
    }
    
},{
    versionKey:false,
    timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;