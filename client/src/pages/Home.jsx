import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedProductCard from '../components/ui/FeaturedProductCard';
import StandardProductCard from '../components/ui/StandardProductCard';
import shuffle from '../utils/shuffleArray';


function Home() {
    const { products, fetchProducts } = useProductContext();


    useEffect(() => {
        fetchProducts();
    }, []);

    const featuredProducts = shuffle(products).slice(0, 3);


    return (
        <>
            <Container fluid='md' className='mt-5'>
                <Row xxl={3}>
                    {featuredProducts.map((product, id) => (
                        <Col key={id} lg={true}>
                            <FeaturedProductCard title={product.name} text={product.description} img={product.images[0]} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container fluid='md' className='mt-5'>
                <Row xxl={3}>
                    {products.map((product, id) => (
                        <Col key={id} lg={true}>
                            <StandardProductCard img={product.images[0]} title={product.name} subtitle={product.description} cpu={product.metadata.processor} gpu={product.metadata.graphics} ram={product.metadata.ram} price={product.default_price.unit_amount} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home
