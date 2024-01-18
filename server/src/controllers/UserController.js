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


const login = async (req, res) => {
    const { email, password } = req.body;

    // Find user
    const existingUser = await UserModel.findOne({ email: email }).select('+password');


    // Check if no user was found or incorrect password was given
    if (!existingUser || !(await bcrypt.compare(password, existingUser.password))) {
        return res.status(401).json('Wrong password or email');
    }


    const user = existingUser.toJSON();
    user._id = existingUser._id;
    delete user.password;


    // Check if user is logged in
    if (req.session._id) {
        return res.status(200).json(user);
    }


    // Save info about the user to the cookie session
    req.session = user;
    res.status(200).json(user);
}


module.exports = { register, login };
