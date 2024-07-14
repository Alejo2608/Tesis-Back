const Paciente = require('../models/Pacients.js');
const Users = require('../models/Users')
const { uploadImagePacient, deleteImage } = require('../utils/cloudinary');  // Asumiendo que tienes funciones similares para manejar imágenes
const fs = require('fs-extra');

// Obtener todos los pacientes
const getAllPacients = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

//Trae un paciente por ID
const pacient = async (req, res) => {
  console.log(req)
  try {
     const {pacientID} = req.params;
     const pacient = await Paciente.findOne({_id: pacientID})
     if(!pacient) return res.status(404).json({messageError: 'Paciente no encontrado'})
     return res.status(200).json({pacient});
  } catch (error) {
     return res.status(500).json({messageError: error.message});
  }
}



// Crear un nuevo paciente
const createPacient = async (req, res) => {
  console.log(req)
  try {
    if (!req.file) return res.status(404).json({ messageError: 'Debes agregar una imagen del paciente' });
    const { path } = req.file;
    const { nombre, necesidad, enfermedad, diagnostico, avances } = req.body;

    let paciente = new Paciente({ nombre, necesidad, enfermedad, diagnostico, avances });

    if (path) {
      const result = await uploadImagePacient(path);
      await fs.unlink(path);
      paciente.imagen = { public_id: result.public_id, secure_url: result.secure_url };
    }

    await paciente.save();
    return res.status(200).json({ paciente });
  } catch (error) {
    return res.status(500).json({ messageError: error.message });
  }
};

// Editar un paciente existente
const updatePacient = async (req, res) => {
  try {
    console.log("Request params:", req.params);
    console.log("Request body:", req.body);

    const { pacientID } = req.params;
    const update = req.body;

    const paciente = await Paciente.findByIdAndUpdate(pacientID, update, { new: true });
    console.log(paciente)
    if (!paciente) {
      return res.status(404).json({ messageError: 'Paciente no encontrado' });
    }
    console.log("Updated patient:", paciente);

    return res.status(200).json({ paciente });
  } catch (error) {
    console.error("Error updating patient:", error);
    return res.status(500).json({ messageError: error.message });
  }
};

// Eliminar un paciente
const deletePacient = async (req, res) => {
  try {
    const { pacienteID } = req.params;
    const paciente = await Paciente.findByIdAndDelete(pacienteID);

    if (!paciente) return res.status(404).json({ messageError: 'Paciente no encontrado' });

    await deleteImage(paciente.imagen.public_id);
    res.status(200).json({ eliminado: true });
  } catch (error) {
    return res.status(500).json({ messageError: error.message });
  }
};

module.exports = {
  getAllPacients,
  createPacient,
  updatePacient,
  deletePacient,
  pacient
};