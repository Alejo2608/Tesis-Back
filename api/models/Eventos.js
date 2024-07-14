const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const eventosSchema = new Schema({
   organizador: {
      type: String,
      required: true
   },
   imagen: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   titulo: {
      type: String,
      unique: true,
      required: true
   },
   descripcion: {
      type: Array,
      default: [],
      required: true
   },
   tipo: {
      type: Array,
      default: [],
      required: true
   },
   fecha: {
      type: String,
      required: true
   },
   hora: {
      type: String,
      required: true
   },
   duracion: {
      type: String,
      default: null
   },
   lugar: {
      type: String,
      required: true
   },
});

const Franelas = mongoose.model('Eventos', eventosSchema);
module.exports = Franelas