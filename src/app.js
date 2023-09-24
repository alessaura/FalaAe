const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path'); 
const app = express();
const hbs = exphbs.create({
  defaultLayout: 'layout', 
  extname: 'handlebars',   
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defina o caminho para a pasta de visualizações
app.set('views', path.join(__dirname, 'views'));

app.get('/criarconta', (req, res) => {
  res.render('criarconta');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor está executando na porta ${PORT}`);
});
