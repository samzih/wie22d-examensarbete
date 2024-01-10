import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NavigationBar from './components/layout/NavigationBar';
import ProductProvider from './context/ProductContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
