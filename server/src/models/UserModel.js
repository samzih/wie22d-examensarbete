const { Schema, model, models } = require('mongoose');
const Joi = require('joi');


const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    isAdmin: { type: Boolean, required: true, default: false },
    stripeCustomerID: { type: String, required: true },
});

const UserModel = models.User || model('User', UserSchema);


const CreateUserSchema = Joi.object({
    firstName: Joi.string().strict().min(1).max(30).required(),
    lastName: Joi.string().strict().min(1).max(30).required(),
    email: Joi.string().email().strict().required(),
    password: Joi.string().min(6).strict().required(),
    isAdmin: Joi.boolean().strict(),
});


module.exports = { UserModel, CreateUserSchema };
