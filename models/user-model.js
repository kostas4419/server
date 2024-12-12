const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    login: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    role: {type: String, require: true},
    isActive: {type: Boolean, default: true},

})

module.exports = model('User', UserSchema)