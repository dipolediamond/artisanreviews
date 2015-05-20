var Artisan = require('../../models').Artisan;

exports.list = function (req, res, next) {
    Artisan.find({}, function (error, artisans) {
        if (error) return next(error);
        res.send({ artisans: artisans });
    });
}

exports.findById = function (req, res, next) {
    Artisan.findOne({ _id: req.params.id }, function (error, artisan) {
        if (error) return next(error);
        res.send(artisan);
    });
}

exports.findByTradeAndLocation = function (req, res, next) {
    Artisan.findOne({ _id: req.params.id, occupation: occupationId, location: req.params.locationId }, function (error, artisan) {
        if (error) return next(error);
        res.send(artisan);
    });
}

exports.add = function (req, res, next) {
    if (!req.body.artisan) {
        return res.send(400, { status: 400, message: 'No artisan data' });
    }
    var artisan = req.body.artisan;
    Artisan.create(artisan, function (error, artisanResponse) {
        if (error) return next(error);
        res.send(artisanResponse);
    });
};