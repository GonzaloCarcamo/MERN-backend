const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');


exports.crearUsuario = async (req, res) => {

    // Extraer mail y password
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if( usuario ) {
            return res.status(400).json({ msg: 'El usuario ya existe '});
        }
        
        // Crea el nuevo usuario
        usuario = new Usuario(req.body);

        // Hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash( password, salt );

        // Guarda el usuario
        await usuario.save();

        // Confirmación
        res.json({ msg: 'Usuario creado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}