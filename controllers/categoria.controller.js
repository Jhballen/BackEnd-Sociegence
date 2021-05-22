const mongoose = require ('mongoose');
const Categoria = require ("../models/categoria.model");

async function findAllCategorias(req, res){
    try {
     const Categorias = await Categoria.find()
     res.json(Categorias)
    } catch (error) {
        console.log(error)
    }
 }
 
 async function createCategoria (req, res) {
     try {
         const newCategoria = new Categoria(
             {   nombre: req.body.nombre, 
                 descripcion: req.body.descripcion
             });
         const CategoriaSaved = await newCategoria.save();
         res.json(CategoriaSaved)
     } catch (error) {
         console.log(error)
     }
 }
 
 
 async function findOneCategoria (req,res){
     try {
         const oneCategoria = await Categoria.findById(req.params.id)
         res.json(oneCategoria)
     } catch (error) {
         console.log(error)
     }
 }
 
async function deleteCategoria(req, res) {
     try {
         const data = await Categoria.findByIdAndDelete(req.params.id)
         res.json({
         message: `${data.nombre} La categoria se elimino con exito`
     });
     } catch (error) {
         console.log(error)
     }
 }
 
async function updateCategoria(req, res){
    try {
     const updatedCategoria = await Categoria.findByIdAndUpdate(req.params.id, req.body)
     res.json(`${updatedCategoria.nombre} se actualizo con exito`)
    } catch (error) {
        console.log(error)
    }
 }

 exports.findAllCategorias = findAllCategorias;
 exports.createCategoria = createCategoria;
 exports.findOneCategoria = findOneCategoria;
 exports.deleteCategoria = deleteCategoria;
 exports.updateCategoria = updateCategoria;