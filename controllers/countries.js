//Dependencies
const express = require("express");
const Country  = require('../models/country')

//Initialize the router object
const router = express.Router();

//SEED DATA
const countrySeed = require('../models/countrySeed.js');
router.get('/seed', (req, res) => {
    Country.deleteMany({}, (error, countries) => { });

    Country.create(countrySeed, (error, data) => {
        res.redirect('/countries');
    });
});

//Routes
//Index
router.get('/', (req, res) => {
    Country.find({}, (err, countries) => {
        res.render("index.ejs", {
            country: countries
        })
        console.log(countries)
    })
})

//export the router object using module.exports
module.exports = router;