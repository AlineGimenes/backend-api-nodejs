const { find } = require('lodash')
const beautifyUnique = require('mongoose-beautful-unique-validation')
const restful = require('node-restful')
const { stringify } = require('nodemon/lib/utils')
const mongoose = restful.mongoose

const registerSchema = new mongoose.Schema({
    fullName: { type: stringify, required: true }
}) 
