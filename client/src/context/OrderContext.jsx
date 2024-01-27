import { createContext, useContext, useState } from 'react'

const OrderContext = createContext({
    userOrders: [],
    setUserOrders: () => { },
    getOrders: () => { },
});


export const useOrderContext = () => useContext(OrderContext);


const OrderProvider = ({ children }) => {
    const [userOrders, setUserOrders] = useState([]);


    // Get all orders for logged in user
    const getOrders = async () => {
        const response = await fetch('/api/orders/user');
        const data = await response.json();
        setUserOrders(data);
    }


    return (
        <div>
            <OrderContext.Provider value={{ getOrders, userOrders }}>
                {children}
            </OrderContext.Provider>
        </div>
    )
}

export default OrderProvider
