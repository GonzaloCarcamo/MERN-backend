const Usuario = require('../models/Usuario');


exports.crearUsuario = async (req, res) => {
    
    try {
        let usuario;
        
        // Crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Guarda el usuario
        await usuario.save();

        // Confirmación
        res.send('Usuario creado correctamente');

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}