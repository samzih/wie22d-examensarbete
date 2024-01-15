const { initStripe } = require('../utils/stripe');
const stripe = initStripe();


const getActiveProducts = async (req, res) => {
    try {

        const products = await stripe.products.list({
            limit: 20,
            active: true,
            expand: ['data.default_price'],
        });

        res.status(200).json(products);

    } catch (error) {

        console.log(error.message);
        res.status(400).send(`There seems to be a problem with listing all the products from stripe. <br> ERROR MESSAGE: ${error.message}`);

    }
}


const getProduct = async (req, res) => {
    try {

        const product = await stripe.products.retrieve(req.params.id, {
            expand: ['default_price'],
        });

        res.status(200).json(product);

    } catch (error) {

        console.log(error.message);
        res.status(400).send(`There seems to be a problem with retrieving the product from stripe. <br> ERROR MESSAGE: ${error.message}`);

    }
}


module.exports = { getActiveProducts, getProduct };
