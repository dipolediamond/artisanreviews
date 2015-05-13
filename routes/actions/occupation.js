var Occupation = require('../../models').Occupation;

exports.list = function (req, res, next) {
    Occupation.find({}, function (error, occupations) {
        if (error) return next(error);
        res.send({ occupations: occupations });
    });
}

exports.findById = function (req, res, next) {
    Occupation.findOne({ _id: req.params.id }, function (error, occupation) {
        if (error) return next(error);
        res.send(occupation);
    });
}

exports.add = function (req, res, next) {
    if (!req.body.occupation) {
        return res.send(400, { status: 400, message: 'No occupation data' });
    }
    var occupation = req.body.occupation;
    Occupation.create(occupation, function (error, locationResponse) {
        if (error) return next(error);
        res.send(occupationResponse);
    });
};