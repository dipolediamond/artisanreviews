var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: Date,
    lastLogin: Date,
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }]
});

module.exports = mongoose.model('User', userSchema);