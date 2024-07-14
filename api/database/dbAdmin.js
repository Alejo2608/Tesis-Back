const Users = require('../models/Users')
require('dotenv').config();

function addAdmin() {
   Users.insertMany([
      {
         "_id": `${process.env.ADMIN_ID}`,
         "username": `${process.env.ADMIN_USERNAME}`,
         "imgPerfil": {
            "public_id": `${process.env.ADMIN_PUBLIC_ID}`,
            "secure_url": `${process.env.ADMIN_SECURE_URL}`
         },
         "nombre": `${process.env.ADMIN_NOMBRE}`,
         "apellido": `${process.env.ADMIN_APELLIDO}`,
         "edad": `${process.env.ADMIN_EDAD}`,
         "biografia": `${process.env.ADMIN_BIOGRAFIA}`,
         "telefono": `${process.env.ADMIN_TELEFONO}`,
         "email": `${process.env.ADMIN_EMAIL}`,
         "password": `${process.env.ADMIN_PASSWORD}`,
         "rol": "Admin"
       }
   ]);
}

module.exports = addAdmin