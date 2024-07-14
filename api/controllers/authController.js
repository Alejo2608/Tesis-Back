const Users = require('../models/Users')
const jwt = require('jsonwebtoken');

// Valida el usuario por email que sea unico y lo guarda en la BD
const registerAdmin = async (req, res) => {
   try {
      const { username, email, password, rol } = req.body;
      const {adminID} = req.params

      const user = await Users.findById(adminID)
      if(!user) return res.status(404).json({messageError: 'Administrador no encontrado'})

      let admin = await Users.findOne({ $or:[ {username}, {email} ] });
      // console.log(admin);
      if (admin) {
         if (admin.username === username) return res.status(404).json({messageError: 'Este nombre de usuario ya esta en uso'});
         if (admin.email === email) return res.status(404).json({messageError: 'Este correo ya esta en uso'});
      }
      
      admin = new Users({username, email, password, rol});
      // console.log(admin);
      await admin.save();

      return res.status(201).send();

   } catch (error) {
      // console.log(error.message);
      return res.status(500).json({messageError: error.message});
   }
}

// Valida el usuario por email que sea unico y lo guarda en la BD
const register = async (req, res) => {
   try {
      const { username, email, password } = req.body;
      let user = await Users.findOne({ $or:[ {username}, {email} ] });
      // console.log(user);
      if (user) {
         if (admin.username === username) return res.status(404).json({messageError: 'Este nombre de usuario ya esta en uso'});
         if (admin.email === email) return res.status(404).json({messageError: 'Este correo ya esta en uso'});
      }
      
      user = new Users({username, email, password});
      // console.log(user);
      await user.save();

      const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
         expiresIn: '30m'
      })

      return res.status(201).json({
         token,
         user: {
            rol: user.rol
         }
      });

   } catch (error) {
      // console.log(error.message);
      return res.status(500).json({messageError: error.message});
   }
}

// Valida que el email existe y que la contraseña sea correcta
const login = async (req, res) => {
   const { email, password } = req.body;
   try {
      let user = await Users.findOne({email});
      // console.log('Aqui estoy')
      if (!user) return res.status(404).json({messageError: 'No existe este email'});

      if(!(await user.comparePassword(password))) return res.status(404).json({messageError: 'La contraseña no es correcta'});
      
      const token = jwt.sign({id: user._id}, process.env.SECRETTK, {
         expiresIn: '30m'
      })

      let img = user.imgPerfil ? user.imgPerfil.secure_url : null
      
      return res.status(200).json({
         token,
         user: {
            username: user.username,
            imgPerfil: img,
            rol: user.rol
         }
      });
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

module.exports = {
   login,
   registerAdmin,
   register
};