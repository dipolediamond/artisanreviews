var Badge = require('../../models').Badge;

exports.list = function (req, res, next) {
    Badge.list(function (error, badges) {
        if (error) return next(error);
        res.send({ badges: badges });
    });
}