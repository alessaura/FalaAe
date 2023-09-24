const Postagem = require('../models/postagem'); 

exports.criarPostagem = async (req, res) => {
  try {
    const novaPostagem = new Postagem(req.body);
    await novaPostagem.save();
    res.status(201).json(novaPostagem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.listarPostagens = async (req, res) => {
  try {
    const postagens = await Postagem.find();
    res.status(200).json(postagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.obterPostagemPorId = async (req, res) => {
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
};


exports.atualizarPostagem = async (req, res) => {
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
};

exports.excluirPostagem = async (req, res) => {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findByIdAndDelete(id);
    if (!postagem) {
      return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
