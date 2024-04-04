const User = require('../model/user.model.js'); // Importa el modelo de usuario correctamente
const express = require('express');
const route = express.Router(); // Crea un nuevo router


const login = async (req, res) => {
  try {
    // Asume que authenticate ahora espera solo un modelo relevante según el tipo de login
    const { token, role } = await authenticate(req.body.email, req.body.password, User);
    res.json({ message: 'User logged in successfully', token, role });
  } catch (error) {
    res.status(401).send(error.message);
  }
};


module.exports = {
  login
};
 // Exporta el router