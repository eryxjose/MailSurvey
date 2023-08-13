const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

console.log(keys.googleClientID);

passport.serializeUser((user, done) => { // user here is a mongoose model
    done(null, user.id);
});

passport.deserializeUser((id, done) => { // id from the user to deserialize
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});



passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true // garante que o proxy do provedor Railway permita o uso de redirecionamento http
    }, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({googleId: profile.id})

        if (existingUser) {
            done(null, existingUser);
        } 
        
        const user = await new User({ googleId: profile.id }).save()
        done(null, user); 
    })
);







