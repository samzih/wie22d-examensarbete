import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import NavigationBar from './components/layout/NavigationBar'
import ProductProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>

          <div className='stickyFooter'>
            <NavigationBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </div>

        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
