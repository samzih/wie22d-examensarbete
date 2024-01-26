import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import Collapse from 'react-bootstrap/Collapse'


function SideBar() {
    const [open, setOpen] = useState(false);


    return (
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
    )
}

export default SideBar
