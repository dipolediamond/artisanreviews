var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    area: { type: String, required: true },
    state: String
});

module.exports = mongoose.model('Location', locationSchema);