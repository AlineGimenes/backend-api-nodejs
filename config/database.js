const mongoose = require('mongoose')
const args = require("args-parser")(process.argv)
mongoose.Promise = require("bluebird")

if(args.production)
     module.exports = mongoose.connect('mongodb://nome_banco:senha@servidor.com.br:27017/usuario')
     else
     module.exports = mongoose.connect('mongodb://localhost/banco_dadosT6')

     mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
     mongoose.Error.messages.Number.min = "O campo '{PATH}' informado é menor que o limite minímo de '{MIN}'."
     mongoose.Error.messages.Number.max = "O campo '{PATH}' informado é maior que o limite máximo de '{MAX}'."
     mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o campo '{PATH}'."
     
