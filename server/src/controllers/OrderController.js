const { OrderModel } = require('../models/OrderModel');


const getOrders = async (req, res) => {
    const { _id } = req.session;

    // Find all orders for user
    let orders = await OrderModel.find({ customer: _id }).select('orderNumber orderItems created totalOrderPrice -_id');

    res.status(200).json(orders);
}

module.exports = { getOrders };
