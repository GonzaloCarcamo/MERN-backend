// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Crea un usuario
// api/usuarios
router.post('/',
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'Pass debe tener al menos 6 caracteres').isLength({ min: 6 })
    ],
);
module.exports = router;
