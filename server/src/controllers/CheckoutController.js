const { initStripe } = require('../utils/stripe');
const stripe = initStripe();
const { OrderModel } = require('../models/OrderModel');


const initStripeSession = async (req, res) => {
    try {

        const session = await stripe.checkout.sessions.create({
            line_items: req.body.map(item => (
                {
                    price: item.priceID,
                    quantity: item.quantity
                }
            )),
            customer: req.session.stripeCustomerID,
            mode: 'payment',
            locale: 'sv',
            allow_promotion_codes: true,
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
        });

        req.session.stripeSessionID = session.id;

        res.status(200).json({ stripe_checkout_url: session.url });

    } catch (error) {

        console.log(error.message);
        res.status(400).json('It did NOT go well with creating a stripe checkout session!' + error.message);

    }
}


const verifyStripeOrder = async (req, res) => {
    try {
        // Verify Stripe session
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

        if (session.payment_status !== 'paid') {
            return res.status(400).json('Session not paid for');
        }

        let order;

        // Only create and save an order in database if it's an active stripe session
        if (req.session.stripeSessionID == req.query.session_id) {
            const line_items = await stripe.checkout.sessions.listLineItems(req.session.stripeSessionID);

            const orderItemsPromises = line_items.data.map(async item => {
                const product = await stripe.products.retrieve(item.price.product);

                return {
                    totalPrice: item.amount_total / 100,
                    product: item.description,
                    unitPrice: item.price.unit_amount / 100,
                    quantity: item.quantity,
                    image: product.images[0],
                };
            });

            // Use Promise.all to wait for all promises to resolve
            const orderItems = await Promise.all(orderItemsPromises);

            order = new OrderModel({
                orderNumber: Math.floor(Math.random() * 9000000000) + 1,
                customer: req.session._id,
                orderItems: orderItems,
                stripeOrderID: session.payment_intent,
                created: session.created,
                totalOrderPrice: session.amount_total / 100,
            });

            await order.save();
        }

        // Order from DB
        const existingOrder = await OrderModel.findOne({ stripeOrderID: session.payment_intent }).populate('customer');

        if (!existingOrder) {
            return res.status(404).json('Order could not be found in our database');
        }

        const { orderNumber, totalOrderPrice, customer, ...rest } = existingOrder;
        const details = { orderNumber, totalOrderPrice, email: customer.email }

        // Information that is for the frontend confirmation/success page
        if (order) {
            req.session.stripeSessionID = null;

            res.status(201).json({ clearCart: true, details });
        } else {
            res.status(200).json({ clearCart: false, details });
        }

    } catch (error) {
        return res.status(error.statusCode).json(error.message);
    }
}


module.exports = { initStripeSession, verifyStripeOrder }
