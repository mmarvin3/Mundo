const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;

//Listener
app.listen(PORT, () => {
    console.log(`Listening for port ${PORT}`);
})

//Connect to mongoose
// mongoose.connect(process.env.DATABASE_URL, {
//     useUnifiedTopology: true,
// })

// db = mongoose.connection;

// db.on("error", (err) => 
//     console.log(`${err.message} is mongodb not connected?`)
// )