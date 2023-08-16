const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    // requireLogin is passed to express and not executed here
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 por 5 créditos',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};



