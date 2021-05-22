const mongoose = require ('mongoose');
const Post = require ("../models/Post");
const Categoria = require ("../models/categoria.model");
const User = require ("../models/user.model");

async function findAllPosts (req, res) {
    try {
      await Post.find({}, (err, posts) =>
     {User.populate(posts, {path: "user"}, (err, posts)=>{
         Categoria.populate(posts, {path: "categoria"}, (err,posts)=>{
             res.send(posts)
         })
     })})
 
    } catch (error) {
        console.log(error)
    }
 }
 
 async function createPost (req, res) {
     try {
         const newPost = new Post(
             {   titulo: req.body.titulo, 
                 descripcion: req.body.descripcion,
                 puntuacion: req.body.puntuacion,
                 user: req.body.user,
                 categoria: req.body.categoria
             });
         const PostSaved = await newPost.save();
         res.json(PostSaved)
     } catch (error) {
         console.log(error)
     }
 }
 
 async function findOnePost (req,res) {
     try {
         await Post.findById(req.params.id, {}, (err, posts) =>
         {User.populate(posts, {path: "user"}, (err, posts)=>{
             Categoria.populate(posts, {path: "categoria"}, (err,posts)=>{
                 res.send(posts)
             })
         })})
         res.json(onePost)
     } catch (error) {
         console.log(error)
     }
 }
 
 async function deletePost (req, res) {
     try {
         const data = await Post.findByIdAndDelete(req.params.id)
         res.json({
         message: `${data.titulo} La publicacion se elimino con exito`
     });
     } catch (error) {
         console.log(error)
     }
 }
 
async function updatePost (req, res) {
    try {
     const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)
     res.json(`${updatedPost.titulo} se actualizo con exito`)
    } catch (error) {
        console.log(error)
    }
}

 exports.findAllPosts = findAllPosts;
 exports.createPost = createPost;
 exports.findOnePost = findOnePost;
 exports.deletePost = deletePost;
 exports.updatePost = updatePost;