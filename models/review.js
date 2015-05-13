var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    artisan: { type: mongoose.Schema.Types.ObjectId, ref: 'Artisan' },
    rating: Number,
    comment: String,
    professionalism: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    pricing: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    promptness: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    addedOn: Date
});

module.exports = mongoose.model('Review', reviewSchema);