const mongoose = require("mongoose");
const Country  = require('../models/country')


const countrySeed = [
    {
        name: 'Bolivia',
        img: 'https://i.imgur.com/kZzcNA2.png',
        capital: 'Sucre'
    }, {
        name: 'Brazil',
        img: 'https://i.imgur.com/00u0D6b.png',
        capital: 'Brasilia'
    }, {
        name:'Argentina',
        img: 'https://i.imgur.com/FFGmWHX.png',
        capital: 'Buenos Aires',
    }, {
        name:'Colombia',
        img: 'https://i.imgur.com/GoxvPZl.png',
        capital: 'Colombia',
    }, {
        name:'Chile',
        img: 'https://i.imgur.com/EFxsfBb.png',
        capital: 'Santiago'
    }, {
        name:'Ecuador',
        img: 'https://i.imgur.com/9GSV3F5.jpeg',
        capital: 'Quito'
    }, {
        name:'Peru',
        img: 'https://i.imgur.com/catpv2u.png',
        capital: 'Lima',
    }, {
        name: 'Paraguay',
        img: 'https://i.imgur.com/rYPhZkR.png',
        capital: 'Asuncion',
    }, {
        name: 'Uruguay',
        img: 'https://i.imgur.com/fWC9YPm.png',
        capital: 'Montevideo',
    }, {
        name: 'Venezuela',
        img: 'https://i.imgur.com/k4u2keR.png',
        capital: 'Caracas'
    }
]

module.exports = countrySeed;
