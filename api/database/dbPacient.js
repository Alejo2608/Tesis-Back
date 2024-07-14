const Paciente = require('../models/Pacients');
require('dotenv').config();

function addPacients() {
   Paciente.insertMany([
      {
         nombre: 'Juana Perez',
         imagen: {
            public_id: 'Eventos UVM-Events/11-de-febrero-Día-mundial-del-enfermo-Cómo-apoyar-a-personas-enfermas-_mxbuv7',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346417/Eventos%20UVM-Events/11-de-febrero-Di%CC%81a-mundial-del-enfermo-Co%CC%81mo-apoyar-a-personas-enfermas-_mxbuv7.jpg'
         },
         necesidad: 'Asistencia médica',
         enfermedad: 'Diabetes',
         diagnostico: 'Diabetes tipo 2',
         avances:'Se puede ver un gran avance del paciente'
      },
      {
         nombre: 'Maria Gomez',
         imagen: {
            public_id: 'Eventos UVM-Events/Pacient1',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346398/Eventos%20UVM-Events/Pacient1.jpg'
         },
         necesidad: 'Rehabilitación',
         enfermedad: 'Lesión de rodilla',
         diagnostico: 'Ruptura de ligamento cruzado anterior',
         avances:'Se puede ver un gran avance del paciente'
      },
      {
         nombre: 'Carlos Diaz',
         imagen: {
            public_id: 'Eventos UVM-Events/11-de-febrero-Día-mundial-del-enfermo-Cómo-apoyar-a-personas-enfermas-_mxbuv7',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346417/Eventos%20UVM-Events/11-de-febrero-Di%CC%81a-mundial-del-enfermo-Co%CC%81mo-apoyar-a-personas-enfermas-_mxbuv7.jpg'
         },
         necesidad: 'Atención psicológica',
         enfermedad: 'Depresión',
         diagnostico: 'Depresión mayor',
         avances:'Se puede ver un gran avance del paciente'
      },
      {
         nombre: 'Ana Martinez',
         imagen: {
            public_id: 'Eventos UVM-Events/11-de-febrero-Día-mundial-del-enfermo-Cómo-apoyar-a-personas-enfermas-_mxbuv7',
            secure_url: 'https://res.cloudinary.com/dtne2vbok/image/upload/v1718346417/Eventos%20UVM-Events/11-de-febrero-Di%CC%81a-mundial-del-enfermo-Co%CC%81mo-apoyar-a-personas-enfermas-_mxbuv7.jpg'
         },
         necesidad: 'Tratamiento oncológico',
         enfermedad: 'Cáncer de mama',
         diagnostico: 'Carcinoma ductal invasivo',
         avances:'Se puede ver un gran avance del paciente'
      }
   ]);
}

module.exports = addPacients
