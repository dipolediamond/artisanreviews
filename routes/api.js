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

module.exports = router;
