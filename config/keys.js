

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
        googleClientID: '175922520607-ngrpmiv4gfb3n0q6oe06b93g89tbdjls.apps.googleusercontent.com',
        googleClientSecret: 'IaMi5gWasief11IdmwGOaCZv',
        mongoURI: 'mongodb+srv://mailsurvey:OrPNZD07OYl0oW0H@cluster0.owrsn.mongodb.net/?retryWrites=true&w=majority',
        cookieKey: 'slkajflsdkjlksdjflksjdfwerwer'
    };
}

