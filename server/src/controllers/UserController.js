const { initStripe } = require('../utils/stripe');
const stripe = initStripe();
const bcrypt = require('bcrypt');
const { UserModel } = require('../models/UserModel');


const register = async (req, res) => {
    const { firstName, lastName, email } = req.body;

    // Check if user already exists (conflict)
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
        return res.status(409).json('Email is already in use');
    }


    // Create a customer on Stripe
    const customer = await stripe.customers.create({
        name: `${firstName} ${lastName}`,
        email: email,
    });


    // Only if customer creation goes well on Stripe, create user in DB
    if (customer) {
        // Create user
        const user = new UserModel(req.body);
        user.stripeCustomerId = customer.id;
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();


        // Send user data as response
        const User = user.toJSON();
        User._id = user._id;
        delete User.password;

        res.status(201).json(User);
    }
}


module.exports = { register };
