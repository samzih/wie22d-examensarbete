import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import OrderConfirmation from './pages/OrderConfirmation'
import RegistrationNotification from './components/ui/RegistrationNotification'
import ProductProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import UserProvider from './context/UserContext'
import User from './pages/User'
import UserProfile from './pages/UserProfile'
import UserOrders from './pages/UserOrders'
import OrderProvider from './context/OrderContext'
import AdminOrders from './pages/AdminOrders'
import Unauthorized from './pages/Unauthorized'


function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <CartProvider>
            <OrderProvider>

              <div className='stickyFooter'>
                <RegistrationNotification />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/product/:id' element={<ProductDetail />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/success' element={<OrderConfirmation />} />
                  <Route path='/user' element={<User />}>
                    <Route path='profile' element={<UserProfile />} />
                    <Route path='orders' element={<UserOrders />} />
                    <Route path='admin/orders' element={<AdminOrders />} />
                  </Route>
                  <Route path='/unauthorized' element={<Unauthorized />} />
                </Routes>
              </div>

            </OrderProvider>
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
