const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const pacientesSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  imagen: {
    type: Object,
    public_id: String,
    secure_url: String,
    default: null
  },
  necesidad: {
    type: String,
    required: true
  },
  enfermedad: {
    type: String,
    required: true
  },
  diagnostico: {
    type: String,
    required: true
  },
  avances: {
    type: String,
    required: true
  }
});

const Pacientes = mongoose.model('Pacientes', pacientesSchema);
module.exports = Pacientes;