import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import OrderConfirmation from './pages/OrderConfirmation'
import NavigationBar from './components/layout/NavigationBar'
import RegistrationNotification from './components/ui/RegistrationNotification'
import ProductProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import UserProvider from './context/UserContext'
import Footer from './components/layout/Footer'
import './App.css'
import User from './pages/User'
import UserProfile from './pages/UserProfile'
import UserOrders from './pages/UserOrders'


function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <CartProvider>

            <div className='stickyFooter'>
              <NavigationBar />
              <RegistrationNotification />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/success' element={<OrderConfirmation />} />
                <Route path='/user' element={<User />}>
                  <Route path='profile' element={<UserProfile />} />
                  <Route path='orders' element={<UserOrders />} />
                </Route>
              </Routes>
              {/* <Footer /> */}
            </div>

          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
