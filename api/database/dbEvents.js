const Eventos = require('../models/Eventos')
require('dotenv').config()

function addEvents() {
   Eventos.insertMany([
      {
         organizador: 'Andreina',
         imagen: {
            public_id: 'Eventos UVM-Events/WhatsApp_Image_2024-05-25_at_1.56.26_PM_smcqqw',
            secure_url:
               'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346448/Eventos%20UVM-Events/WhatsApp_Image_2024-05-25_at_1.56.26_PM_smcqqw.jpg'
         },
         titulo: 'Recaudacion de fondos para Juana Perez',
         descripcion: [
            'Recaudacion de fondos para Juan Perez'
         ],
         tipo: ['Videoconferencia'],
         fecha: '2023-04-20',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
      },
      {
      organizador: 'Andreina',
      imagen: {
         public_id: 'Eventos UVM-Events/kgm9h54iz9hulfivecrb',
         secure_url:
            'https://res.cloudinary.com/dtne2vbok/image/upload/v1718390665/Eventos%20UVM-Events/kgm9h54iz9hulfivecrb.png'
      },
      titulo: 'Recaudacion de fondos para Juanaa Perez',
      descripcion: [
         'Recaudacion de fondos para Juan Perez'
      ],
      tipo: ['Videoconferencia'],
      fecha: '2023-04-20',
      hora: '09:00',
      duracion: '02:00',
      lugar: 'Laboratorio de Computación',
   },
   {
   organizador: 'Andreina',
   imagen: {
      public_id: 'Eventos UVM-Events/WhatsApp_Image_2024-05-25_at_1.56.26_PM_smcqqw',
      secure_url:
         'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346448/Eventos%20UVM-Events/WhatsApp_Image_2024-05-25_at_1.56.26_PM_smcqqw.jpg'
   },
   titulo: 'Recaudacion de fondos para Maira Perez',
   descripcion: [
      'Recaudacion de fondos para Juan Perez'
   ],
   tipo: ['Videoconferencia'],
   fecha: '2023-04-20',
   hora: '09:00',
   duracion: '02:00',
   lugar: 'Laboratorio de Computación',
},
      {
         organizador: 'Andreina',
         imagen: {
            public_id: 'Eventos UVM-Events/WhatsApp_Image_2024-05-25_at_1.56.26_PM_smcqqw',
            secure_url:
               'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346448/Eventos%20UVM-Events/WhatsApp_Image_2024-05-25_at_1.56.26_PM_smcqqw.jpg'
         },
         titulo: 'Recaudacion de fondos para Juan Perez2',
         descripcion: [
            'Recaudacion de fondos para Juan Perez'
         ],
         tipo: ['Videoconferencia'],
         fecha: '2023-04-20',
         hora: '09:00',
         duracion: '02:00',
         lugar: 'Laboratorio de Computación',
      },
   ])
}

module.exports = addEvents
