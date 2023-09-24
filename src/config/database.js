const mongoose = require('mongoose');

async function conectarAoBanco() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/falaae', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o banco de dados estabelecida.');
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error);
  }
}

module.exports = conectarAoBanco;
