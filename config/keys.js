

if (process.env.NODE_ENV === 'production') {
    // return production keys
    module.exports = require('./prodkeys');
} else {
    // return dev keys
    module.exports = require('./devkeys');
}

