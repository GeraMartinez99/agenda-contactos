const model = require('./model');

module.exports = {
    getAll: (req, res) => {
        model.find({status: 1})
        .then( response => res.send( response ))
        .catch( err => res.status(400).send('Algo salió mal'));
    },

    getByName: (req, res) => {
        const nombre = req.query.nombre;
        model.find({status: 1,nombre: nombre})
            .then( response => res.send( response ))
            .catch( err => res.status(400).send('Algo salió mal'));
    },

    getByEmail: (req, res) => {
        const correo = req.query.correo;
        model.find({status: 1, correo: correo})
            .then( response => res.send(response) )
            .catch( err => res.status(400).send('Algo salió mal')); //Bad request

    },

    getOneById: (req, res) => {
        const id = req.params.id;
        model.findOne({_id: id})
            .then( response => res.send(response) )
            .catch( err => res.status(400).send('Algo salió mal'));
    },

    create: (req, res) => {
        const contacto = req.body;

        model.create(contacto)
            .then( response => res.send(response))
            .catch( err => res.status(400).send('Algo salió mal'));
    
    },
    update: (req, res) => {
        const {id} = req.body;
        const contacto = req.body;

        model.updateOne({_id: id}, contacto)
            .then(response => res.send(response) )
            .catch( err => res.status(400).send('Algo salió mal'));

    },

    delete: (req, res) => {
        const {id} = req.body;

        model.findOne({_id: id})
            .then(response => {
                response.status = 0;
                response.save();
                res.send(response);
            })
            .catch( err => res.status(400).send('Algo salió mal'));
    }
    
}