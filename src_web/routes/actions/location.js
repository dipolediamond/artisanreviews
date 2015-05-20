var Location = require('../../models').Location;

exports.list = function (req, res, next) {
    Location.find({}, function (error, locations) {
        if (error) return next(error);
        res.send({ locations: locations });
    });
}

exports.findById = function (req, res, next) {
    Location.findOne({ _id: req.params.id }, function (error, location) {
        if (error) return next(error);
        res.send(location);
    });
}

exports.add = function (req, res, next) {
    if (!req.body.location) {
        return res.send(400, { status: 400, message: 'No location data' });
    }
    var location = req.body.location;
    Location.create(location, function (error, locationResponse) {
        if (error) return next(error);
        res.send(locationResponse);
    });
};