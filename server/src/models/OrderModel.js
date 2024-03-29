const { Schema, model, models } = require('mongoose');


const OrderItemSchema = new Schema({
    totalPrice: { type: Number, required: true },
    product: { type: String, required: true },
    unitPrice: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
}, { _id: false });


const OrderSchema = new Schema({
    orderNumber: { type: Number, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: { type: [OrderItemSchema], required: true },
    stripeOrderID: { type: String, required: true },
    created: { type: Number, required: true },
    totalOrderPrice: { type: Number, required: true },
    isSent: { type: Boolean, required: true, default: false },
});


const OrderModel = models.Order || model('Order', OrderSchema);


module.exports = { OrderModel };
