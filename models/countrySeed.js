const mongoose = require("mongoose");
const Country  = require('../models/country')


const countrySeed = [
    {
        name: 'Bolivia',
        img: 'https://i.imgur.com/lnsykz3.png',
        capital: 'Sucre'
    }, {
        name: 'Brazil',
        img: 'https://i.imgur.com/00u0D6b.png',
        capital: 'Brasilia'
    }
]

module.exports = countrySeed;
