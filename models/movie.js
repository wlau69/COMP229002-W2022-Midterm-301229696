
/*
File name: models/movie.js
Author's name: Lau, Wing Yan
StudentID: 301229696
Web App: COMP229002-W2022-Midterm-301229696
*/

let mongoose = require('mongoose');

// Create a model class
let movieModel = mongoose.Schema(
    {
        Title: String,
        Synopsis: String,
        Year: Number,
        Director: String,
        Genre: String
    },
    {
        collection: "movies"
    }
);

module.exports = mongoose.model('Movie', movieModel);