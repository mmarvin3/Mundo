const mongoose = require("mongoose");
const Country  = require('../models/country')


const countrySeed = [
    {
        name: 'Bolivia',
        img: 'https://i.imgur.com/kZzcNA2.png',
        capital: 'Sucre',
        population: '11.67 million',
    }, {
        name: 'Brazil',
        img: 'https://i.imgur.com/00u0D6b.png',
        capital: 'Brasilia',
        population: '212.6 million',
    }, {
        name:'Argentina',
        img: 'https://i.imgur.com/FFGmWHX.png',
        capital: 'Buenos Aires',
        population: '45.38 million',
    }, {
        name:'Colombia',
        img: 'https://i.imgur.com/GoxvPZl.png',
        capital: 'Colombia',
        population: '50.88 million',
    }, {
        name:'Chile',
        img: 'https://i.imgur.com/EFxsfBb.png',
        capital: 'Santiago',
        population: '19.12 million',
    }, {
        name:'Ecuador',
        img: 'https://i.imgur.com/9GSV3F5.jpeg',
        capital: 'Quito',
        population: '17.64 million',
    }, {
        name:'Peru',
        img: 'https://i.imgur.com/catpv2u.png',
        capital: 'Lima',
        population: '32.97 million',
    }, {
        name: 'Paraguay',
        img: 'https://i.imgur.com/rYPhZkR.png',
        capital: 'Asuncion',
        population: '7.133 million',
    }, {
        name: 'Uruguay',
        img: 'https://i.imgur.com/fWC9YPm.png',
        capital: 'Montevideo',
        population: '3.474 million',
    }, {
        name: 'Venezuela',
        img: 'https://i.imgur.com/k4u2keR.png',
        capital: 'Caracas',
        population: '28.44 million',
    }
]

module.exports = countrySeed;
