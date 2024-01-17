const { Schema, model, models } = require('mongoose');


const UserSchema = new Schema({
    isAdmin: { type: Boolean, required: true, default: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true, select: false },
    stripeCustomerId: { type: String, required: true },
});

const UserModel = models.User || model('User', UserSchema);


module.exports = { UserModel };
