const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requiredCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', (req, requireLogin, requireCredits, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            
        })
    });
};