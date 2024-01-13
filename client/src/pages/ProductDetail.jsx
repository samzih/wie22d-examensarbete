import { useEffect, useState } from 'react'
import { Link, useParams, } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'
import { useCartContext } from '../context/CartContext'

import { Image, Container, Figure, Col, Row, Stack, Button, Breadcrumb } from 'react-bootstrap'


function ProductDetail() {
    const { id } = useParams();
    const { product, setProduct, fetchProduct } = useProductContext();
    const { addToCart } = useCartContext();


    useEffect(() => {
        fetchProduct(id);
    }, []);


    return (
        <>
            {product.id === id &&
                <Container className='my-5'>
                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Hem</Breadcrumb.Item>
                            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className='align-items-start'>
                        <Col className='text-center'>
                            {/* <Image width={500} src={product.images} /> */}

                            <Figure>
                                <Figure.Image width={500} src={product.images} />
                                <Figure.Caption className='text-center fw-medium'>
                                    Bilden kan ge en ungefärlig representation av det slutliga bygget. Vänligen hänvisa till produktspecifikationerna för den mest exakta representationen av slutbygget.
                                </Figure.Caption>
                            </Figure>

                        </Col>
                        <Col>
                            <Stack>
                                <Container>
                                    <h1>{product.name}</h1>
                                    <hr />
                                </Container>
                                <Container>
                                    <ul className='list-unstyled lh-lg'>
                                        <li><span className='fw-medium'>Processor:</span> {product.metadata.processor}</li>
                                        <li><span className='fw-medium'>Chassi:</span> {product.metadata.case}</li>
                                        <li><span className='fw-medium'>Processorkylare:</span> {product.metadata.cpu_cooler}</li>
                                        <li><span className='fw-medium'>Fläktar:</span> {product.metadata.fan_amount}</li>
                                        <li><span className='fw-medium'>Moderkort:</span> {product.metadata.motherboard}</li>
                                        <li><span className='fw-medium'>RAM-minne:</span> {product.metadata.ram}</li>
                                        <li><span className='fw-medium'>Grafikkort:</span> {product.metadata.graphics}</li>
                                        <li><span className='fw-medium'>Primär lagring:</span> {product.metadata.primary_storage}</li>
                                        <li><span className='fw-medium'>Nätaggregat:</span> {product.metadata.power_supply}</li>
                                        <li><span className='fw-medium'>Nätverk:</span> {product.metadata.wifi}</li>
                                        <li><span className='fw-medium'>Operativ System:</span> {product.metadata.operating_system}</li>
                                        <li><span className='fw-medium'>Mått:</span> {product.metadata.dimensions}</li>
                                    </ul>
                                </Container>
                                <Container>
                                    <Stack className='text-start' gap={2}>
                                        <h2>{`${product.default_price.unit_amount / 100} kr`}</h2>
                                        <Button onClick={() => addToCart(product)} size='lg' className='fw-semibold' variant='primary'>Lägg i varukorg</Button>
                                    </Stack>
                                </Container>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default ProductDetail
