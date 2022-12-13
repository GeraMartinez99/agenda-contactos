const {model, Schema} = require('mongoose');

const contactosSchema = new Schema({
    nombre: {type: String},
    telefono: {type: String},
    correo: {type: String},
    status: {type: Number, default: 1}
})

const contactosModel = model('contactos', contactosSchema);
module.exports = contactosModel;