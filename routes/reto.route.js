var express = require('express');
var router = express.Router();
const retoController = require ("../controllers/reto.controller");

router.get('/', retoController.findAllRetos);

router.post('/', retoController.createReto);

router.get('/:id', retoController.findOneReto);

router.delete('/:id', retoController.deleteReto);

router.put('/:id', retoController.updateReto);

module.exports = router;