const mongoose = require ('mongoose');
const Reto = require ("../models/reto.model");
const Categoria = require ("../models/categoria.model");
const User = require ("../models/user.model");

async function findAllRetos (req, res) {
    try {
      await Reto.find({}, (err, retos) =>
     {User.populate(retos, {path: "user"}, (err, retos)=>{
         Categoria.populate(retos, {path: "categoria"}, (err,retos)=>{
             res.send(retos)
         })
     })})
 
    } catch (error) {
        console.log(error)
    }
 }
 
 async function createReto (req, res) {
     try {
         const newReto = new Reto(
             {   titulo: req.body.titulo, 
                 descripcion: req.body.descripcion,
                 user: req.body.user,
                 categoria: req.body.categoria
             });
         const RetoSaved = await newReto.save();
         res.json(RetoSaved)
     } catch (error) {
         console.log(error)
     }
 }
 
 
 async function findOneReto (req,res) {
     try {
         await Reto.findById(req.params.id, {}, (err, retos) =>
         {User.populate(retos, {path: "user"}, (err, retos)=>{
             Categoria.populate(retos, {path: "categoria"}, (err,retos)=>{
                 res.send(retos)
             })
         })})
     } catch (error) {
         console.log(error)
     }
 }
 
 async function deleteReto (req, res)  {
     try {
         const data = await Reto.findByIdAndDelete(req.params.id)
         res.json({
         message: `${data.titulo} reto se elimino con exito`
     });
     } catch (error) {
         console.log(error)
     }
 }
 
 async function updateReto (req, res){
    try {
     const updatedReto = await Reto.findByIdAndUpdate(req.params.id, req.body)
     res.json(`${updatedReto.titulo} se actualizo con exito`)
    } catch (error) {
        console.log(error)
    }
 }

 exports.findAllRetos = findAllRetos;
 exports.createReto = createReto;
 exports.findOneReto = findOneReto;
 exports.deleteReto = deleteReto;
 exports.updateReto = updateReto;