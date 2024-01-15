const { initStripe } = require('../utils/stripe');
const stripe = initStripe();


const initStripeSession = async (req, res) => {
    try {

        const session = await stripe.checkout.sessions.create({
            line_items: req.body.map(item => (
                {
                    price: item.priceID,
                    quantity: item.quantity
                }
            )),
            mode: 'payment',
            locale: 'sv',
            allow_promotion_codes: true,
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
        });

        res.status(200).json({ stripe_checkout_url: session.url });

    } catch (error) {

        console.log(error.message);
        res.status(400).json('It did NOT go well with creating a stripe checkout session!' + error.message);

    }
}


module.exports = { initStripeSession }
