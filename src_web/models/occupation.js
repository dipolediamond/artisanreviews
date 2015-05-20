var mongoose = require('mongoose');

var occupationSchema = new mongoose.Schema({
    label: { type: String, required: true },
    description: String
});

module.exports = mongoose.model('Occupation', occupationSchema);