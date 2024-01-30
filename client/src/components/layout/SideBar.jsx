import { useState } from 'react'
import { Button, Container, Image, Stack } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import Collapse from 'react-bootstrap/Collapse'
import logo from '../../assets/bb-logo-blue.png'
import { BsCart3, BsPersonFill, BsPersonWorkspace, BsTable, BsChevronDown } from 'react-icons/bs'


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
                    <Nav.Link as={NavLink} to={'/user/profile'} eventKey='link-1'>
                        <Stack direction='horizontal' gap={2}>
                            <BsPersonFill size={20} />
                            Min profil
                        </Stack>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={NavLink} to={'/user/orders'} eventKey='link-2'>
                        <Stack direction='horizontal' gap={2}>
                            <BsCart3 size={20} />
                            Mina beställningar
                        </Stack>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Button} onClick={() => setOpen(!open)} variant='link' className='text-decoration-none'>
                        <Stack direction='horizontal' gap={2}>
                            <BsPersonWorkspace size={20} />
                            Admin panel
                            <BsChevronDown />
                        </Stack>
                    </Nav.Link>

                    <Collapse in={open}>
                        <Container>

                            <Nav.Item>
                                <Nav.Link as={NavLink} to={'/user/admin/orders'} eventKey='link-3'>
                                    <Stack direction='horizontal' gap={2}>
                                        <BsTable size={20} />
                                        Beställningar
                                    </Stack>
                                </Nav.Link>
                            </Nav.Item>

                        </Container>
                    </Collapse>

                </Nav.Item>
            </Nav>
        </>
    )
}

export default SideBar
