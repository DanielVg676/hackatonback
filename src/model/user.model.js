const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const TrafficSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un correo electrónico válido']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true });

// Middleware que se ejecuta antes de guardar un usuario para encriptar la contraseña
TrafficSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Método para comparar contraseñas ingresadas con la contraseña en la base de datos
TrafficSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', TrafficSchema);

module.exports = User;
  