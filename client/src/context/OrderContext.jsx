import { createContext, useContext, useState } from 'react'

const OrderContext = createContext({
    userOrders: [],
    setUserOrders: () => { },
    getOrders: () => { },
    orders: [],
    getAllOrders: () => { },
    markAsSent: () => { },
});


export const useOrderContext = () => useContext(OrderContext);


const OrderProvider = ({ children }) => {
    const [userOrders, setUserOrders] = useState([]);
    const [orders, setOrders] = useState([]);


    // Get all orders for logged in user
    const getOrders = async () => {
        const response = await fetch('/api/orders/user');
        const data = await response.json();
        setUserOrders(data);
    }


    // Get orders for all users
    const getAllOrders = async () => {
        const response = await fetch('/api/orders/');
        const data = await response.json();
        setOrders(data.reverse());
    }


    // Update the order sent status
    const markAsSent = async (orderId) => {
        const response = await fetch(`/api/orders/${orderId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        });


        if (response.ok) {
            const updatedOrder = await response.json();

            const updatedOrders = orders.map(order => {
                if (order._id === updatedOrder._id) {
                    return updatedOrder; // replace with updated order
                }
                return order; // leave unchanged
            });

            setOrders(updatedOrders);
        }
    }


    return (
        <div>
            <OrderContext.Provider value={{ getOrders, userOrders, orders, getAllOrders, markAsSent }}>
                {children}
            </OrderContext.Provider>
        </div>
    )
}

export default OrderProvider
