const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o DB
mongoose.connect('mongodb+srv://dbam4:np210804@cluster0-juays.mongodb.net/test?retryWrites=true',
{ useNewUrlParser: true  }
);
requireDir('./src/models');

app.use('/api', require('./src/routes'));


app.listen(process.env.PORT || 3000);