import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { BsPerson, BsCart3 } from "react-icons/bs";
import Stack from 'react-bootstrap/Stack';
import logo from '../../assets/react.svg';


function NavigationBar() {
    return (
        <>
            <Navbar bg='dark' data-bs-theme='dark' fixed='top'>
                <Container>

                    <Navbar.Brand as={Link} to='/'>
                        <img
                            alt="logo"
                            src={logo}
                            height="40"
                            className="d-inline-block align-center"
                        />{' '}
                        ByteBreeze
                    </Navbar.Brand>

                    <Nav>

                        <Stack className='align-items-center' direction='horizontal' gap={5}>
                            <Stack direction='horizontal' className='align-items-center' gap={2}>
                                <BsPerson color='white' size={45} />
                                <div>
                                    <p className='text-light m-0 fw-semibold'>Logga in</p>
                                    <p className='text-light m-0'>Skapa konto</p>
                                </div>
                            </Stack>

                            <BsCart3 color='grey' size={37} />
                        </Stack>

                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
