const joiValidate = (joiSchema) => {
    return (req, res, next) => {
        const validation = joiSchema.validate(req.body);

        if (!validation.error) {
            return next();
        }

        res.status(400).json(validation.error.message);
    }
}


module.exports = joiValidate;
