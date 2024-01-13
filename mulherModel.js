const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
  nome: {
    type: string,
    required: true,
  },
  imagem: {
    type: string,
    required: true,
  },
  citacao: {
    type: string,
    required: true,
  },
  minibio: {
    type: string,
    required: true,
  }
})

module.exports = mongoose.model("diva", MulherSchema);