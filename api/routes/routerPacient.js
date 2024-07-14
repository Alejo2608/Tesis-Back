const express = require('express');
const router = express.Router();
const {getAllPacients,createPacient,updatePacient,deletePacient,pacient} = require('../controllers/pacientController');
const { upload } = require('../controllers/uploadController');

// Muestra un paciente por id
router.get('/pacient/:pacientID', pacient)

// Obtener todos los pacientes
router.get('/all', getAllPacients);

// Crear un nuevo paciente
router.post('/create-pacient', upload.single('imagen'), createPacient);

// Modificar un paciente existente
router.put('/update-pacient/:pacientID', upload.single('imagen'), updatePacient);

// Eliminar un paciente
router.delete('/delete-paciente/:pacienteID', deletePacient);

module.exports = router;