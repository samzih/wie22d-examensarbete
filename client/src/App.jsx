import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
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
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
