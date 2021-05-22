var express = require('express');
var router = express.Router();
const UserController = require ("../controllers/user.controller");


router.get('/', UserController.findAllUsers);
router.post('/', UserController.createUser);
router.get('/:username', UserController.findByUsername);
router.get('/id/:id', UserController.findOneUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser)
module.exports = router;
