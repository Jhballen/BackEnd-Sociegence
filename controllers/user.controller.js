const mongoose = require ('mongoose');
const User = require ("../models/user.model");

async function findAllUsers (req, res) {
    try {
     const Users = await User.find()
     res.json(Users)
    } catch (error) {
        console.log(error)
    }
 }

 async function createUser (req, res) {
    try {
        const newUser = new User(
            {   username: req.body.username, 
                email: req.body.email,
                nombre: req.body.nombre,
                IdTipo: req.body.IdTipo,
                IdNumero: req.body.IdNumero,
                Telefono:  req.body.Telefono,
                contrasena: req.body.contrasena
            });
        const UserSaved = await newUser.save();
        res.json(UserSaved)
    } catch (error) {
        console.log(error)
    }
}

async function findByUsername (req, res) {
    try {
        const Users = await User.find({username: req.params.username})
         res.json(Users)
    } catch (error) {
        console.log(error)
    }
}

async function findOneUser (req,res) {
    try {
        const oneUser = await User.findById(req.params.id)
        res.json(oneUser)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser (req, res){
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        res.json({
        message: `${data.username} el usuario se elimino con exito`
    });
    } catch (error) {
        console.log(error)
    }
}

async function updateUser (req, res) {
    try {
     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
     res.json(`${updatedUser.title} se actualizo con exito`)
    } catch (error) {
        console.log(error)
    }
 }

exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.findOneUser = findOneUser;
exports.findByUsername = findByUsername;
exports.findAllUsers = findAllUsers;
exports.createUser = createUser;