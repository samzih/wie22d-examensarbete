const adminAuthorization = (req, res, next) => {
    if (req.session?.isAdmin) {
        return next();
    }

    // Not an admin (Unauthorized)
    res.status(403).json('User needs to have admin privileges to perform this request');
}

module.exports = adminAuthorization;
