const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({

    titulo: {
        type: String,
        requiered: true,
        trim: true
    },
    descripcion: {
        type : String,
        trim: true
    },
    puntuacion: {
        type: Number
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

var Post = mongoose.model('Post', postSchema);

module.exports = Post;