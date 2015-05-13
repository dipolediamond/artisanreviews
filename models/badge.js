var mongoose = require('mongoose');

var badgeSchema = new mongoose.Schema({
    label: String,
    description: String,
    ordinal: Number,
    icon: String
});

module.exports = mongoose.model('Badge', badgeSchema);