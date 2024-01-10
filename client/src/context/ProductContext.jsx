import { createContext, useContext, useState, useEffect } from 'react';


const ProductContext = createContext({
    products: [],
    setProducts: () => { },
    fetchProducts: () => { },
    product: {},
    setProduct: () => { },
    fetchProduct: () => { },
});


export const useProductContext = () => useContext(ProductContext);


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});


    // Fetch all products
    async function fetchProducts() {
        const response = await fetch('/api/products');
        const data = await response.json();

        setProducts(data.data)
    }


    // Fetch individual product
    async function fetchProduct(id) {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();

        setProduct(data);
        console.log(data);
    }


    return (
        <div>
            <ProductContext.Provider value={{ fetchProducts, products, setProducts, product, setProduct, fetchProduct }}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}


export default ProductProvider
