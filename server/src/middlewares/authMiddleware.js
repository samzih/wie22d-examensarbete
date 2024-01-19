const auth = (req, res, next) => {
    if (req.session?._id) {
        return next();
    }

    // Unauthorized
    res.status(401).json('Login required for this request');
}


module.exports = auth;
