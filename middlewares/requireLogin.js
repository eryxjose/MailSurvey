// next is used to pass the next middleware to execute
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'Faça login para ter acesso.'})
    }

    next();
}