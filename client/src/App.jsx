import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductProvider from './context/ProductContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
