import { createContext, useContext, useState, useEffect } from 'react'
import shuffle from '../utils/shuffleArray'

const ProductContext = createContext({
    products: [],
    setProducts: () => { },
    fetchProducts: () => { },
    product: {},
    setProduct: () => { },
    fetchProduct: () => { },
    featuredProducts: [],
});


export const useProductContext = () => useContext(ProductContext);


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [hasEffectRun, setHasEffectRun] = useState(false);


    // GET all products from Stripe
    async function fetchProducts() {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();

            setProducts(data.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (products.length && !hasEffectRun) {
            setFeaturedProducts(shuffle(products).slice(0, 3));

            setHasEffectRun(true);
        }
    }, [products]);


    // GET one individual product from Stripe
    async function fetchProduct(id) {
        try {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();

            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <ProductContext.Provider value={{ fetchProducts, products, setProducts, product, setProduct, fetchProduct, featuredProducts }}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}


export default ProductProvider
