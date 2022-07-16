const mongoose = require('mongoose');
const person = new mongoose.Schema({ name: String, age: String });
module.exports = mongoose.model('info', person, 'info');
