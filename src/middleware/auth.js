// middleware/auth.js

const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

// Middleware de autenticação
const autenticacaoMiddleware = async (req, res, next) => {
  try {
    // Verifique se o token de autenticação está presente no cabeçalho da solicitação
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ message: 'Acesso não autorizado. Token não fornecido.' });
    }

    // Verifique se o token é válido
    const decoded = jwt.verify(token, 'segredo'); // Substitua 'segredo' pelo seu segredo real

    // Verifique se o usuário associado ao token existe no banco de dados
    const usuario = await Usuario.findById(decoded.id);

    if (!usuario) {
      return res.status(401).json({ message: 'Acesso não autorizado. Usuário não encontrado.' });
    }

    // Adicione o objeto de usuário autenticado à solicitação para uso posterior nas rotas protegidas
    req.usuario = usuario;
    next(); // Avance para a próxima função de middleware ou rota
  } catch (error) {
    res.status(401).json({ message: 'Acesso não autorizado. Token inválido.' });
  }
};

module.exports = autenticacaoMiddleware;
