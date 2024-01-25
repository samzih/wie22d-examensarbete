import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Table, Stack, Image, ButtonGroup, Spinner, OverlayTrigger, Tooltip, CloseButton } from 'react-bootstrap'
import { BsArrowLeftShort, BsX, BsFillTrash3Fill } from 'react-icons/bs'
import { BiSolidLockAlt } from 'react-icons/bi'
import { useCartContext } from '../context/CartContext'
import { useUserContext } from '../context/UserContext'


function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotalPrice, emptyCart } = useCartContext();
    const { user } = useUserContext();
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


    const checkoutTooltip = (props) => (
        <Tooltip {...props}>
            {cartItems.length < 1 ?
                (
                    <span>Kundvagnen är tom</span>
                )
                :
                (
                    <span>Du måste vara inloggad för att kunna checka ut</span>
                )
            }
        </Tooltip>
    );


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
                                            {/* <BsX onClick={() => removeFromCart(item.product.id)} size={40} color='red' /> */}
                                            <CloseButton onClick={() => removeFromCart(item.product.id)} />
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
                        <Button as={Link} to='/' className='icon-link text-decoration-none' variant='link'>
                            <BsArrowLeftShort />
                            Fortsätt handla
                        </Button>
                        {cartItems.length >= 1 && user ?
                            (
                                <Button onClick={() => { setIsLoading(true), handlePayment() }} variant='success' size='lg' className='icon-link px-5' disabled={isLoading}>
                                    {isLoading ?
                                        (
                                            <>
                                                <Spinner as='span' animation='border' size='sm' role='status' />
                                                Checkout
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
                            )
                            :
                            (
                                <OverlayTrigger placement='bottom' delay={{ show: 100, hide: 250 }} overlay={checkoutTooltip}>
                                    <div>
                                        <Button disabled variant='success' size='lg' className='icon-link px-5'>
                                            <BiSolidLockAlt />
                                            Checkout
                                        </Button>
                                    </div>
                                </OverlayTrigger>
                            )
                        }

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Cart
