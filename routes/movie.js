/*
File name: routes/movie.js
Author's name: Lau, Wing Yan
StudentID: 301229696
Web App: COMP229002-W2022-Midterm-301229696
*/

var express = require('express');
var router = express.Router();

let movieController = require('../controllers/movie');

// Router for lists movies function
router.get('/list', movieController.movieList);

// Router for movie details function
router.get('/details/:id', movieController.details);

// Routers for edit functions
router.get('/edit/:id', movieController.displayEditPage);
router.post('/edit/:id', movieController.processEditPage);

// Router for Delete function
router.get('/delete/:id', movieController.performDelete);

// Routers for Add functions
router.get('/add', movieController.displayAddPage);
router.post('/add', movieController.processAddPage);


module.exports = router;