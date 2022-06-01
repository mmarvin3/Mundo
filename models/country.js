const mongoose = require("mongoose");


const countrySchema = new mongoose.Schema(
    {
        name: {type: String},
        img: {type: String},
        capital: {type: String}
    }
)

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;