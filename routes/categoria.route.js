var express = require('express');
var router = express.Router();
const CategoriaController = require ("../controllers/categoria.controller");


router.get('/', CategoriaController.findAllCategorias);

router.post('/', CategoriaController.createCategoria);

router.get('/:id', CategoriaController.findOneCategoria);

router.delete('/:id', CategoriaController.deleteCategoria);

router.put('/:id', CategoriaController.updateCategoria)

module.exports = router;