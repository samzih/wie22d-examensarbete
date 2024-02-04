import { useEffect, useState } from 'react'
import { useProductContext } from '../context/ProductContext'
import { Container, Row, Col, Pagination, Image } from 'react-bootstrap'
import FeaturedProductCard from '../components/ui/FeaturedProductCard'
import StandardProductCard from '../components/ui/StandardProductCard'
import SalesPitch from '../components/ui/SalesPitch'
import NavigationBar from '../components/layout/NavigationBar'
import Footer from '../components/layout/Footer'


function Home() {
    const { products, fetchProducts, featuredProducts } = useProductContext();
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        fetchProducts();
    }, []);


    const handlePageChange = (page) => {

        if (typeof (page) !== 'number') {
            return
        }

        setCurrentPage(page);
    }


    // Calculate the indexes of the current page
    const productsPerPage = 6;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


    return (
        <>
            <NavigationBar />

            <div>
                <Image src='/pc-hero-bg.jpg' fluid />
            </div>

            <Container className='mt-5'>
                <h1 className='display-6 fw-bold text-center mb-4'>Slumpmässigt rekommenderade</h1>
            </Container>

            <Container fluid='md'>
                <Row xxl={3}>
                    {featuredProducts.map((product) => (
                        <Col key={product.id} lg={true}>
                            <FeaturedProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container fluid='md' className='mt-5'>
                <SalesPitch />
            </Container>

            <Container fluid='md' className='mt-5'>
                <h1 className='display-6 fw-bold text-center mb-3'>Hela vårt sortiment</h1>
                <Row xxl={3}>
                    {currentProducts.map((product) => (
                        <Col key={product.id} lg={true} className='mb-5'>
                            <StandardProductCard product={product} />
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

            <Footer />
        </>
    )
}

export default Home
