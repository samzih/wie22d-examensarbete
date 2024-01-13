import React from 'react'
import { Container, Row, Col, Button, Table, Stack, Image, ButtonGroup } from 'react-bootstrap'
import { BsArrowLeftShort, BsX } from 'react-icons/bs'
import { BiSolidLockAlt } from 'react-icons/bi'


function Cart() {
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
                                <tr>
                                    <td>
                                        <Stack direction='horizontal'>
                                            <Image width={100} src='https://files.stripe.com/links/MDB8YWNjdF8xT1U4cGhMaW4xNWRCZWFYfGZsX3Rlc3RfeExzUzZNVDBXdlE4VjBreWFMUU9TTzBK00Qewu5ozy' />
                                            <p className='m-0'>Produktnamn</p>
                                        </Stack>
                                    </td>
                                    <td className='m-0 p-0 text-end align-middle'>17 699 kr</td>
                                    <td className='m-0 p-0 text-center align-middle'>
                                        <div className='d-inline-flex'>
                                            <Stack gap={2} direction='horizontal'>
                                                <div>1</div>
                                                <ButtonGroup vertical size='sm'>
                                                    <Button variant='light' className='border'>+</Button>
                                                    <Button variant='light' className='border'>-</Button>
                                                </ButtonGroup>
                                            </Stack>
                                        </div>
                                    </td>
                                    <td className='m-0 p-0 text-end align-middle'>17 699 kr</td>
                                    <td className='m-0 p-0 text-end align-middle'>
                                        <BsX size={40} color='red' />
                                    </td>
                                </tr>
                            </tbody>

                        </Table>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='d-flex justify-content-end'>
                        <h2 className='display-6'>17 699 kr</h2>
                    </Col>
                </Row>

                <Row className='mt-2'>
                    <Col className='d-flex justify-content-between'>
                        <Button className='icon-link text-decoration-none' variant='link'>
                            <BsArrowLeftShort />
                            Fortsätt handla
                        </Button>
                        <Button variant='success' size='lg' className='icon-link px-5'>
                            <BiSolidLockAlt />
                            Checkout
                        </Button>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Cart
