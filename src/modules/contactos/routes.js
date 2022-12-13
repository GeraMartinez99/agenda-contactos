const router = require('express').Router();
const express = require('express');
const contactosController = require('./controller');

router.get('/contactos', contactosController.getAll);
router.get('/contactos/nombre', contactosController.getByName);
router.get('/contactos/correo', contactosController.getByEmail);
router.post('/contactos/crear',express.json() ,contactosController.create);
router.get('/contactos/:id', contactosController.getOneById);
router.put('/contactos/editar', express.json(), contactosController.update);
router.delete('/contactos/eliminar', express.json(), contactosController.delete);
module.exports = router;