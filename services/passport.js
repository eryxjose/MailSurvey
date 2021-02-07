const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.callbackURL
    }, (accessToken, refreshToken, profile, done) => { // Error callback
        console.log(profile);
        new User({ googleId: profile.id });
    }
));
