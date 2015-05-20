var mongoose = require('mongoose');

var artisanSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickName: String,
    mobileNumber: String,
    alternateNumber: String,
    address: String,
    occupation: { type: mongoose.Schema.Types.ObjectId, ref: 'Occupation' },
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    addedOn: Date
});

module.exports = mongoose.model('Artisan', artisanSchema);