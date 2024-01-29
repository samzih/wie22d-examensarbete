const { OrderModel } = require('../models/OrderModel');


const getOrders = async (req, res) => {
    const { _id } = req.session;

    // Find all orders for user
    let orders = await OrderModel.find({ customer: _id }).select('orderNumber orderItems created totalOrderPrice isSent -_id');

    res.status(200).json(orders);
}


const getAllOrders = async (req, res) => {
    const orders = await OrderModel.find({}).populate('customer').select('-orderItems');

    res.status(200).json(orders);
}


const markAsSent = async (req, res) => {
    const { orderId } = req.params;

    const update = { isSent: true }
    const order = await OrderModel.findByIdAndUpdate(orderId, update, { new: true }).populate('customer').select('-orderItems');

    res.status(200).json(order);
}

module.exports = { getOrders, getAllOrders, markAsSent };
