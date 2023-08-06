

if (process.env.NODE_ENV === 'production') {
    // return production keys
    //module.exports = require('./prodkeys');
    module.exports = {
        googleClientID: process.env.GOOGLE_CLIENT_ID,
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
        mongoURI: process.env.MONGO_URI,
        cookieKey: process.env.COOKIE_KEY
    };
} else {
    // return dev keys
    module.exports = {
        googleClientID: '253993098754-hhcbs2712upgrgl1isd6rd1mlglgbdvb.apps.googleusercontent.com',
        googleClientSecret: 'cZzfYjFjohwzwCkK_Wec8OiG',
        mongoURI: 'mongodb+srv://mailsurvey:OrPNZD07OYl0oW0H@cluster0.owrsn.mongodb.net/?retryWrites=true&w=majority',
        //mongoURI: 'mongodb+srv://mailsurvey:OrPNZD07OYl0oW0H@cluster0.owrsn.mongodb.net/?retryWrites=true&w=majority',
        cookieKey: 'slkajflsdkjlksdjflksjdfwerwer'
    };
}

