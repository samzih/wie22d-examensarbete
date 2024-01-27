import { useState } from 'react'
import { Button, Container, Image, Stack } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import Collapse from 'react-bootstrap/Collapse'
import logo from '../../assets/bb-logo-blue.png'


function SideBar() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <Stack as={Link} to='/' direction='horizontal' gap={2} className='m-auto align-items-center text-decoration-none text-light'>
                <Image src={logo} width={50} />
                <h1 className='m-0 fs-4 fw-normal'>ByteBreeze</h1>
            </Stack>

            <hr />

            <Nav variant='pills' defaultActiveKey='' className='flex-column mb-auto'>

                <Nav.Item>
                    <Nav.Link as={NavLink} to={'/user/profile'} eventKey='link-1'>Min profil</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={NavLink} to={'/user/orders'} eventKey='link-2'>Mina beställningar</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Button} onClick={() => setOpen(!open)} variant='link' className='text-decoration-none'>Admin panel</Nav.Link>

                    <Collapse in={open}>
                        <Container>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to={'/user/admin/products'} eventKey='link-3'>Produkter</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to={'/user/admin/orders'} eventKey='link-4'>Beställningar</Nav.Link>
                            </Nav.Item>

                        </Container>
                    </Collapse>

                </Nav.Item>
            </Nav>
        </>
    )
}

export default SideBar
