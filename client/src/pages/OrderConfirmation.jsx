import { useState, useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link, useSearchParams } from 'react-router-dom'
import { Container, Row, Col, Stack, Button, Spinner, Image } from 'react-bootstrap'
import { BsBagCheck } from 'react-icons/bs'
import NavigationBar from '../components/layout/NavigationBar'


function OrderConfirmation() {
    const { emptyCart } = useCartContext();
    const [queryParameters] = useSearchParams();
    const [orderDetails, setOrderDetails] = useState();
    const [loading, setLoading] = useState(true);


    const verifyOrder = async () => {
        // Store session_id query value
        const session_id = queryParameters.get('session_id');

        if (!session_id) {
            return setLoading(false);
        }

        const response = await fetch(`/api/checkout/verify-order?session_id=${session_id}`);

        const data = await response.json();

        // Empty cart if clearCart is true
        data.clearCart && emptyCart();

        setOrderDetails(data.details);
        setLoading(false);
    }


    useEffect(() => {
        verifyOrder();
    }, []);


    return (
        <>
            <NavigationBar />
            {loading ?
                (
                    <Container>
                        <Row className='justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
                            <Col xs="auto">
                                <Spinner animation='border' role='status' />
                            </Col>
                        </Row>
                    </Container>
                )
                :
                (
                    <>
                        {orderDetails ?
                            (
                                <Container className='text-center'>

                                    <Row className='mt-5 mb-4'>
                                        <Col>
                                            <Stack gap={3} className='align-items-center'>
                                                <BsBagCheck color='green' size={150} />
                                                <h1 className='display-5'>Tack för din beställning!</h1>
                                            </Stack>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='mb-0'>
                                            <Stack gap={2} className='align-items-center'>
                                                <p>Ordernummer: {orderDetails.orderNumber}</p>
                                                <p>Din beställning på {orderDetails.totalOrderPrice} kr har godkänts ✔</p>
                                                <p>En bekräftelse har skickats till dig på {orderDetails.email}</p>
                                            </Stack>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='mt-3 mb-5'>
                                            <Stack gap={3} direction='horizontal' className='justify-content-center'>
                                                <Button as={Link} to='/' variant='success' className='px-3'>Återgå till butiken</Button>
                                                <Button as={Link} to='/user/orders' variant='outline-secondary' className='px-3'>Visa orderhistorik</Button>
                                            </Stack>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className='text-secondary my-5'>
                                            <p>Om du har några frågor eller funderingar är du välkommen att kontakta oss.</p>
                                        </Col>
                                    </Row>

                                </Container>
                            )
                            :
                            (
                                <Container className='text-center mt-5'>
                                    <Stack gap={4} className='align-items-center '>
                                        <h1 className='display-3'>Ingen beställning hittades</h1>
                                        <Image src='./no-order-found.png' width={500} />
                                    </Stack>
                                </Container>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default OrderConfirmation
