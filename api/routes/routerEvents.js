const express = require('express');
const router = express.Router();
const { deleteEvent, updateEvent, createEvent, getAllEventos,event } = require('../controllers/eventController');
const { upload } = require('../controllers/uploadController');
// Rutas de Eventos
router.get('/all', getAllEventos); // Nueva ruta para obtener todos los eventos

// Muestra un evento por id
router.get('/event/:eventID', event)

// Crea un evento
router.post('/create-event', upload.single('imagen'), createEvent)

// Modifica un evento
router.put('/update-event/:eventID', upload.single('imagen'), updateEvent)

// Elimina un evento
router.delete('/delete-event/:eventID', deleteEvent)

module.exports = router

