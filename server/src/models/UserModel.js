const { Schema, model, models } = require('mongoose');


const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    isAdmin: { type: Boolean, required: true, default: false },
    stripeCustomerID: { type: String, required: true },
});

const UserModel = models.User || model('User', UserSchema);


module.exports = { UserModel };
