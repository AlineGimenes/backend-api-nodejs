const mongoose = require('mongoose')
const args = require('args-parser')(process.argv)
mongoose.Promise = require('bluebird')

if(args.production)
     module.exports = mongoose.connect('mongodb://usuario:@servidor:27017/senha')
     else
     module.exports = mongoose.connect('mongodb://localhost/banco_local')

     mongoose.Error.message.general.required = "O campo '{PATH}' é obrigatório."
     mongoose.Error.message.Number.min = "O campo '{PATH}' informado é menor que o limite minímo de '{MIN}'."
     mongoose.Error.message.Number.max = "O campo '{PATH}' informado é maior que o limite máximo de '{MAX}'."
     mongoose.Error.message.String.enum = "O '{VALUE}' não é válido para o campi '{PATH}'."
     
