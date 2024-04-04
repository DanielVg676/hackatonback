const express = require('express');
const router = express.Router();
const { login } = require('../controller/users.controller');

// Manejar la solicitud POST para la ruta /login
router.post('/login', login);   

module.exports = router;