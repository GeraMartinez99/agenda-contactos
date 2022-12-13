const router = require('express').Router();
const contactosRoutes = require('./modules/contactos/routes');

router.use(contactosRoutes);

module.exports = router;