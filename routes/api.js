var express = require('express');
var router = express.Router();
var actions = require('./actions');




// Documentation
router.get('/', function (req, res) {
    res.render('apidocs', { title: 'API Documentation' });
});

//Locations
router.get('/locations', actions.Location.list);
router.get('/locations/:id', actions.Location.findById);
router.post('/locations', actions.Location.add);

//Occupations
router.get('/occupations', actions.Occupation.list);
router.get('/occupations/:id', actions.Occupation.findById);
router.post('/occupations', actions.Occupation.add);

//Artisans
router.get('/artisans', actions.Artisan.list);
router.get('/artisans/:id', actions.Artisan.findById);
router.get('/artisans/:occupationId/:locationId', actions.Artisan.findByTradeAndLocation);
router.post('/artisans', actions.Artisan.add);

module.exports = router;
