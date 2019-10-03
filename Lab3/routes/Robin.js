'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    if (req.query)
        var name1 = "Robin";

    res.render('Robin', { name: name1 });
});

module.exports = router;