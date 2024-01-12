import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import logo from '../../assets/react.svg'
import { BsTwitterX, BsInstagram, BsVimeo } from 'react-icons/bs'

function Footer() {
    return (
        <footer className='bg-dark mt-auto pt-4'>
            <Container fluid='sm'>
                <Row className='border-top border-secondary text-center align-items-center py-3'>
                    <Col className='justify-content-start d-flex'>
                        <p className='mb-0 text-white-50'>© 2024 ByteBreeze AB <i>(publ)</i></p>
                    </Col>
                    <Col>
                        <Link to='/'>
                            <Image width={45} src={logo} />
                        </Link>
                    </Col>
                    <Col>
                        <ul className='mb-0 justify-content-end align-items-center list-unstyled d-flex'>
                            <li className='ms-3'>
                                <a className='text-light' href='https://www.twitter.com/'>
                                    <BsTwitterX size={22} />
                                </a>
                            </li>
                            <li className='ms-3'>
                                <a className='text-light' href='https://www.instagram.com/'>
                                    <BsInstagram size={22} />
                                </a>
                            </li>
                            <li className='ms-3'>
                                <a className='text-light' href='https://www.vimeo.com/'>
                                    <BsVimeo size={22} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
