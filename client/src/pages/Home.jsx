import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import FeaturedProductCard from '../components/ui/FeaturedProductCard';
import StandardProductCard from '../components/ui/StandardProductCard';
import shuffleArray from '../utils/shuffleArray';


function Home() {
    const { products, fetchProducts } = useProductContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setFeaturedProducts(shuffleArray(products).slice(0, 3));
    }, [products]);

    const handlePageChange = (page) => {

        if (typeof (page) !== 'number') {
            return
        }

        setCurrentPage(page);
    }

    // Calculate the indexes of the current page
    const productsPerPage = 3;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


    return (
        <>
            <Container fluid='md' className='mt-5'>
                <Row xxl={3}>
                    {featuredProducts.map((product) => (
                        <Col key={product.id} lg={true}>
                            <FeaturedProductCard id={product.id} title={product.name} text={product.description} img={product.images[0]} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container fluid='md' className='mt-5'>
                <Row xxl={3}>
                    {currentProducts.map((product) => (
                        <Col key={product.id} lg={true}>
                            <StandardProductCard id={product.id} img={product.images[0]} title={product.name} subtitle={product.description} cpu={product.metadata.processor} gpu={product.metadata.graphics} ram={product.metadata.ram} price={product.default_price.unit_amount} />
                        </Col>
                    ))}
                </Row>

                <Pagination className='justify-content-center my-3'>
                    <Pagination.Prev onClick={() => handlePageChange(currentPage > 1 && currentPage - 1)} />
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => handlePageChange(currentPage < products.length / productsPerPage && currentPage + 1)} />
                </Pagination>

            </Container>
        </>
    )
}

export default Home
