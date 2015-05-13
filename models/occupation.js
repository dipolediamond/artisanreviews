var mongoose = require('mongoose');

var occupationSchema = new mongoose.Schema({
    label: String,
    description: String
});

module.exports = mongoose.model('Occupation', occupationSchema);