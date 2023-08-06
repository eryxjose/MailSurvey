const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
//const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
// Não é necessário atribuir o retorno de passport, 
// apenas requerer o passport para executar
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//teste acesso
// app.get('/', (req, res) => {
//     res.send(keys);
// });

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

// app.use(session({
//     secret: 'ksjhdfkjshdkfjshdkjfuwioeyriweyr',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 dia de validade do cookie
// }));

// app.use(passport.initialize());
// app.use(passport.session());

//const authRoutes = require('./routes/authRoutes');
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
 
app.listen(PORT);

