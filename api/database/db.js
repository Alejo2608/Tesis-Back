require('dotenv').config();
const mongoose = require('mongoose');
const Users = require('../models/Users')
const Eventos = require('../models/Eventos')
const Pacients= require('../models/Pacients')
const addAdmin = require('./dbAdmin'); // Agrega Categorias
const addEvents = require('./dbEvents'); // Agrega los Eventos
const addPacients = require('./dbPacient')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      const admin = await Users.find({email: process.env.ADMIN_EMAIL}).lean();
      const events = await Eventos.find().limit(1).lean();
      const pacients = await Pacients.find().limit(1).lean();
      if (admin.length === 0) {
         addAdmin()
         console.log('Administrador Creado');
      }
      if (events.length === 0) {
         addEvents()
         console.log('Eventos Agregados');
      }
      if (pacients.length === 0) {
         addPacients()
         console.log('Pacientes Agregados');
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));