/*
File name: controllers/index.js
Author's name: Lau, Wing Yan
StudentID: 301229696
Web App: COMP229002-W2022-Midterm-301229696
*/

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
