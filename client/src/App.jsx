import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import NavigationBar from './components/layout/NavigationBar'
import ProductProvider from './context/ProductContext'
import Footer from './components/layout/Footer'

function App() {

  const stickyFooter = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <BrowserRouter>
      <ProductProvider>
        <div style={stickyFooter}>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
