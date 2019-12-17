const express = require("express");
const app = express();
const mongoUri = require("./keys.js")
const mongoose = require("mongoose")
const apiCities = require("./rutes/apiCities")
const cors = require("cors")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser())
app.get("/", (req, res) => res.send("<h1>HELLO WORLD<h1>"));

mongoose.connect(mongoUri.uri)
.then(()=> console.log("Mongo está conectado"))
.catch(err=> console.log(err))

app.get('/love', (req, res) => {
    res.send('Hi Love');
  });

app.use('/api', apiCities)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));