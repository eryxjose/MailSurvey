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
        clientID: '253993098754-hhcbs2712upgrgl1isd6rd1mlglgbdvb.apps.googleusercontent.com',
        clientSecret: 'cZzfYjFjohwzwCkK_Wec8OiG',
        callbackURL: '/auth/google/callback',
        proxy: true // garante que o proxy do provedor Railway permita o uso de redirecionamento http
    }, (accessToken, refreshToken, profile, done) => {
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        console.log('profile' + profile.id);
        User.findOne({googleId: profile.id}).then((existingUser) => {
            console.log('--->>'+existingUser);
            if (existingUser) {
                // already exists
                done(null, existingUser);
            } else {
                new User({ googleId: profile.id })
                    .save()
                    .then((user) => done(null, user));
            }
        });

        
    })
);



