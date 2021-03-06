//Dependencies
const express = require("express");
const Country  = require('../models/country')
console.log(Country, "here is the country info")

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

//New
router.get('/new', (req, res) => {
    res.render('new.ejs');
})

//Delete
router.delete('/:id', (req, res) => {
    Country.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/countries')
    })
})

//Update
router.put("/:id", (req, res) => {
    Country.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updateCountry) => {
            res.redirect(`/countries/${req.params.id}`)
        }
    )
})

//Create
router.post('/', (req, res) => {
    Country.create(req.body, (error, createdCountry) => {
        res.redirect('/countries')
    })
})

//Edit
router.get('/:id/edit', (req, res) => {
    Country.findById(req.params.id, (error, foundCountry) => {
        res.render("edit.ejs", {
            country: foundCountry,
        })
    })
})

//Show
router.get('/:id', (req, res) => {
    Country.findById(req.params.id, (err, foundCountry) => {
        res.render('show.ejs', {
            country: foundCountry,
        })
    })
})

//export the router object using module.exports
module.exports = router;