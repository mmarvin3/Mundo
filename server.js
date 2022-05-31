//Dependencies
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = 3000;

//Connection to mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Checking mongoose connection
db = mongoose.connection;
db.on("error", (err) => 
    console.log(`${err.message} is mongodb not connected?`)
);
db.on("connected", () => console.log("MONGO is connected"));
db.on("disconnected", () => console.log("mongo has disconnected"));

//Middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));

//Listener
app.listen(PORT, () => {
    console.log(`Listening for port ${PORT}`);
})