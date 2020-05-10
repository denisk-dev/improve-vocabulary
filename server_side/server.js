const express = require('express');

//maybe make this dynamic
const port = 3500;

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection is successful...");
});


const termsRouter = require('./routes/terms');

app.use('/api', termsRouter);

app.listen(port, () =>{console.log('Server is up, port: ' + port)});

