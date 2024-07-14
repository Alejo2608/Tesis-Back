const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = require('mongoose');

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true
   },
   imgPerfil: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   nombre: { 
      type: String,
      default: null
   },
   apellido: { 
      type: String,
      default: null
   },
   biografia: { 
      type: String,
      default: null
   },
   edad: { 
      type: Number,
      default: null
   },
   telefono: { 
      type: String,
      default: null
   },
   email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   rol: {
      type: String,
      default: 'User',
      required: true
   },
   favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Eventos'
   }],
   confirmEvent: {
      type: Array,
      default: []
   }
});

userSchema.pre('save', async function(next){
   const user = this;
   if(!user.isModified('password')) return next

   try {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(user.password, salt) 

      user.password = hash;
      next();

   } catch (error) {
      console.log(error);
      throw new Error('Error al hashear la contraseña');
   }
})

userSchema.methods.comparePassword = async function(confirmPassword){
   return await bcrypt.compare(confirmPassword, this.password)
}

const Users = mongoose.model('Users', userSchema);
module.exports = Users;