const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o DB
mongoose.connect('mongodb://am4:np210804@kamino.mongodb.umbler.com:38439/gobook', 
{ useNewUrlParser: true  }
);
requireDir('./src/models');

app.use('/api', require('./src/routes'));


app.listen(3001);