const express = require('express');
// const { body } = require('express-validator')
const { register, login, registerAdmin } = require('../controllers/authController')

const router = express.Router()

// Registrar Administrador
router.post('/register-admin/:adminID', registerAdmin)

// Registrar Usuario
router.post('/register', register)

// Iniciar Sesion
router.post('/login', login)

// Cerrar Sesion

module.exports = router