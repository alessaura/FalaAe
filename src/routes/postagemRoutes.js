const express = require('express');
const router = express.Router();

const Postagem = require('../models/postagem');

// Middleware para autenticação ou autorização, se necessário
const autenticacaoMiddleware = require('../middleware/auth');

// Rota para criar uma nova postagem
router.post('/postagens', autenticacaoMiddleware, async (req, res) => {
  try {
    const novaPostagem = new Postagem(req.body);
    await novaPostagem.save();
    res.status(201).json(novaPostagem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para listar todas as postagens
router.get('/postagens', async (req, res) => {
  try {
    const postagens = await Postagem.find();
    res.status(200).json(postagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter uma postagem por ID
router.get('/postagens/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findById(id);
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.status(200).json(postagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar uma postagem por ID
router.put('/postagens/:id', autenticacaoMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findByIdAndUpdate(id, req.body, { new: true });
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.status(200).json(postagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para excluir uma postagem por ID
router.delete('/postagens/:id', autenticacaoMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findByIdAndDelete(id);
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.status(204).send(); // Sem conteúdo (postagem excluída com sucesso)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
