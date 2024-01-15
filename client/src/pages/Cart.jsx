import { useState } from 'react'
import { Container, Row, Col, Button, Table, Stack, Image, ButtonGroup, Spinner } from 'react-bootstrap'
import { BsArrowLeftShort, BsX, BsFillTrash3Fill } from 'react-icons/bs'
import { BiSolidLockAlt } from 'react-icons/bi'
import { useCartContext } from '../context/CartContext'


function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotalPrice, emptyCart } = useCartContext();
    const [isLoading, setIsLoading] = useState(false);


    async function handlePayment() {

        // Stores the cart with product and quantity ready to be sent to stripe
        const cart = cartItems.map((item) => (
            { priceID: item.product.default_price.id, quantity: item.quantity }
        ));

        const response = await fetch('/api/checkout/create-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cart),
        });

        if (!response.ok) {
            return
        }

        const { stripe_checkout_url } = await response.json();
        window.location = stripe_checkout_url;

    }


    return (
        <>
            <Container>
                <Row className='my-5 text-center'>
                    <Col>
                        <h1 className='display-5'>Din kundvagn</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th className='text-start'>Produkt</th>
                                    <th className='text-end'>Pris</th>
                                    <th className='text-center'>Antal</th>
                                    <th className='text-end'>Total</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.product.id}>
                                        <td>
                                            <Stack direction='horizontal'>
                                                <Image width={100} src={item.product.images} />
                                                <p className='m-0'>{item.product.name}</p>
                                            </Stack>
                                        </td>
                                        <td className='m-0 p-0 text-end align-middle'>{item.product.default_price.unit_amount / 100} kr</td>
                                        <td className='m-0 p-0 text-center align-middle'>
                                            <div className='d-inline-flex'>
                                                <Stack gap={2} direction='horizontal'>
                                                    <div>{item.quantity}</div>
                                                    <ButtonGroup vertical size='sm'>
                                                        <Button onClick={() => increaseQuantity(item.product)} variant='light' className='border'>+</Button>
                                                        <Button onClick={() => decreaseQuantity(item.product)} variant='light' className='border'>-</Button>
                                                    </ButtonGroup>
                                                </Stack>
                                            </div>
                                        </td>
                                        <td className='m-0 p-0 text-end align-middle'>{`${item.product.default_price.unit_amount * item.quantity / 100} kr`}</td>
                                        <td className='m-0 p-0 text-end align-middle'>
                                            <BsX onClick={() => removeFromCart(item.product.id)} size={40} color='red' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>
                    </Col>
                </Row>

                {cartItems.length >= 1 &&
                    <Row className='mt-1'>
                        <Col className='d-flex justify-content-end'>
                            <Button onClick={() => emptyCart()} className='icon-link text-decoration-none text-danger' variant='link'>
                                <small>Rensa kundvagnen</small>
                                <BsFillTrash3Fill size={15} />
                            </Button>
                        </Col>
                    </Row>
                }

                <Row className='mt-5'>
                    <Col className='d-flex justify-content-end'>
                        <h2 className='display-6'>{`${cartTotalPrice} kr`}</h2>
                    </Col>
                </Row>

                <Row className='mt-2 mb-5'>
                    <Col className='d-flex justify-content-between'>
                        <Button className='icon-link text-decoration-none' variant='link'>
                            <BsArrowLeftShort />
                            Fortsätt handla
                        </Button>

                        <Button onClick={() => { setIsLoading(true), handlePayment() }} variant='success' size='lg' className='icon-link px-5'>
                            {isLoading ?
                                (
                                    <>
                                        <Spinner as='span' animation='border' size='sm' role='status' />
                                        Checkout...
                                    </>
                                )
                                :
                                (
                                    <>
                                        <BiSolidLockAlt />
                                        Checkout
                                    </>
                                )
                            }
                        </Button>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Cart
