const mongoose = require('mongoose');

const curtidaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Referência ao modelo de Usuário
    required: true,
  },
  postagem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Postagem', // Referência ao modelo de Postagem
    required: true,
  },
  dataCurtida: {
    type: Date,
    default: Date.now,
  },
});

const Curtida = mongoose.model('Curtida', curtidaSchema);

module.exports = Curtida;
