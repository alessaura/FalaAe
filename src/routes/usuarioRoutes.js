const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario'); // Importe o modelo de Usuário

// Rota para criar um novo usuário
router.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todos os usuários
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter um usuário por ID
router.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um usuário por ID
router.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para excluir um usuário por ID
router.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByIdAndDelete(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(204).send(); // Sem conteúdo (usuário excluído com sucesso)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
