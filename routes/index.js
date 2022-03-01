/*
File name: routes/index.js
Author's name: Lau, Wing Yan
StudentID: 301229696
Web App: COMP229002-W2022-Midterm-301229696
*/

var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerIndex.home);

module.exports = router;
