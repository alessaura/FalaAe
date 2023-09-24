const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dataRegistro: {
    type: Date,
    default: Date.now,
  },
  dataNascimento: Date,
  fotoPerfil: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Postagem' }],
  seguidores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
  seguindo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
});

const Usuario = mongoose.model('Usuario', usuarioSchema);s
module.exports = Usuario;
