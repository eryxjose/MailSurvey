const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

require('./routes/authRoutes')(app);
require('./models/User');
require('./services/passport'); // referência sem retorno para o carregamento das configurações

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;

app.listen(PORT);

