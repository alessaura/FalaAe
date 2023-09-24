const mongoose = require('mongoose');
const Postagem = require('./models/postagem'); 


mongoose.connect('mongodb://127.0.0.1/falaae', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida.'))
  .catch((error) => console.error('Erro na conexão com o banco de dados:', error));


const novaPostagem = new Postagem({
  conteudo: 'Isso é uma postagem de exemplo.',
  dataHoraPostagem: new Date(),
  curtidas: 0,
  comentarios: [
    { texto: 'Ótima postagem!' },
    { texto: 'Concordo completamente!' },
  ],
});


novaPostagem.save()
  .then(() => console.log('Postagem criada e salva com sucesso.'))
  .catch((error) => console.error('Erro ao criar e salvar a postagem:', error));
