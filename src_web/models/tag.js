var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
    label: String,
    category: String
});

module.exports = mongoose.model('Tag', tagSchema);