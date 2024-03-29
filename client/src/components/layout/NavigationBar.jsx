import { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Badge, Stack, Image, OverlayTrigger, Popover, Button, CloseButton, Form, InputGroup, FloatingLabel, Dropdown, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsPerson, BsCart3, BsPersonFill } from 'react-icons/bs'
import { LuSettings2 } from 'react-icons/lu'
import { RxExit } from 'react-icons/rx'
import logo from '../../assets/bb-logo-blue.png'
import avatar from '/default-avatar.jpg'
import { useCartContext } from '../../context/CartContext'
import { useUserContext } from '../../context/UserContext'


const NavigationBar = () => {
    const { cartItems } = useCartContext();
    const { show, setShow, registerUser, loginUser, user, logoutUser } = useUserContext();
    const [overlay, setOverlay] = useState();
    const [registerValidated, setRegisterValidated] = useState(false);
    const [loginValidated, setLoginValidated] = useState(false);
    const [openAdminInput, setOpenAdminInput] = useState(false);


    // Calculates the total quantity of items in cart
    const totalCartQuantity = cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
    }, 0);


    useEffect(() => {
        registerValidated && setOverlay(register);
    }, [registerValidated]);


    useEffect(() => {
        loginValidated && setOverlay(login);
    }, [loginValidated]);


    const handleRegister = (e) => {
        e.preventDefault();

        // If validation passes then try to register user, otherwise validate form
        if (e.currentTarget.checkValidity()) {
            registerUser(e);
            setRegisterValidated(false);
        } else {
            setRegisterValidated(true);
        }
    }


    const handleLogin = (e) => {
        e.preventDefault();

        // If validation passes then try to register user, otherwise validate form
        if (e.currentTarget.checkValidity()) {
            loginUser(e);
            setLoginValidated(false);
        } else {
            setLoginValidated(true);
        }
    }


    const handleClick = (value) => {
        if (show) {
            setShow(!show);
            return
        }

        value == 'login' ? setOverlay(login) : setOverlay(register);
        setShow(true);
    }


    const handleClose = () => {
        setShow(false);
        setLoginValidated(false);
        setRegisterValidated(false);
        setOpenAdminInput(false);
    }


    const handleCheck = () => {
        setOpenAdminInput(!openAdminInput);
    }


    useEffect(() => {
        setOverlay(register);
    }, [openAdminInput]);


    const register = (
        <Popover id='popover-register' className='w-100'>
            <Popover.Header as='h3' className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold'>Skapa konto</span>
                <CloseButton onClick={handleClose} />
            </Popover.Header>
            <Popover.Body>
                <Form className='d-grid' validated={registerValidated} noValidate onSubmit={(e) => handleRegister(e)}>

                    <Form.Group className='mb-3'>
                        <InputGroup>

                            <FloatingLabel label='Förnamn' controlId='firstName'>
                                <Form.Control required autoComplete='given-name' name='firstName' type='text' placeholder='Förnamn' />
                            </FloatingLabel>

                            <FloatingLabel label='Efternamn' controlId='lastName'>
                                <Form.Control required autoComplete='family-name' name='lastName' type='text' placeholder='Efternamn' />
                            </FloatingLabel>

                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <FloatingLabel label='E-postadress' controlId='email'>
                            <Form.Control required autoComplete='email' name='email' type="email" placeholder="namn@exempel.se" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <FloatingLabel label='Lösenord' controlId='password'>
                            <Form.Control required minLength={6} autoComplete='new-password' name='password' type='password' placeholder='Lösenord' />
                            <Form.Control.Feedback type='invalid'>Ditt lösenord måste vara minst 6 tecken</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <Form.Check id='admin' onChange={handleCheck} type='switch' label='Registrera dig som admin?' />

                        <Collapse in={openAdminInput}>
                            <div className='mb-1'>
                                <Form.Control name='adminCode' placeholder='Admin kod' disabled={!openAdminInput} required={openAdminInput} />
                            </div>
                        </Collapse>
                    </Form.Group>

                    <p className='small text-center text-muted'>Härmed intygar jag att jag är minst 18 år och godkänner medlemsvillkoren.</p>

                    <Button type='submit' variant='primary'>Skapa konto</Button>

                    <hr />

                    <Stack direction='horizontal' gap={1} className='align-items-center justify-content-center'>
                        <p className='m-0 fs-6 text-center'>Redan medlem?</p>
                        <Button type='button' onClick={() => setOverlay(login)} variant='link' className='fs-6 p-0 border-0 link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Logga in</Button>
                    </Stack>

                </Form>
            </Popover.Body>
        </Popover>
    );

    const login = (
        <Popover id='popover-login' className='w-100'>
            <Popover.Header as='h3' className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold'>Logga in</span>
                <CloseButton onClick={handleClose} />
            </Popover.Header>
            <Popover.Body>
                <Form className='d-grid' validated={loginValidated} noValidate onSubmit={(e) => handleLogin(e)}>

                    <Form.Group className='mb-3'>
                        <FloatingLabel label='E-postadress' controlId='email'>
                            <Form.Control required autoComplete='email' name='email' type="email" placeholder="namn@exempel.se" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <FloatingLabel label='Lösenord' controlId='password'>
                            <Form.Control required autoComplete='current-password' name='password' type='password' placeholder='Lösenord' />
                        </FloatingLabel>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Logga in</Button>

                    <hr />

                    <Stack direction='horizontal' gap={1} className='align-items-center justify-content-center'>
                        <p className='m-0 fs-6 text-center'>Har du inget konto?</p>
                        <Button type='button' onClick={() => { openAdminInput ? setOpenAdminInput(false) : setOverlay(register); }} variant='link' className='fs-6 p-0 border-0 link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Bli medlem</Button>
                    </Stack>

                </Form>
            </Popover.Body>
        </Popover>
    );


    return (
        <>
            <Navbar bg='dark' data-bs-theme='dark' sticky='top'>
                <Container>

                    <Navbar.Brand as={Link} to='/' className='d-flex align-items-center gap-2'>
                        <img
                            alt='logo'
                            src={logo}
                            height='40'
                            className='d-inline-block align-center'
                        />{' '}
                        ByteBreeze
                    </Navbar.Brand>

                    <Nav>

                        <Stack className='align-items-center' direction='horizontal' gap={5}>

                            {user ?
                                (
                                    <Stack direction='horizontal' className='align-items-center justify-content-center' gap={2}>
                                        <Image height={40} src={avatar} roundedCircle />
                                        <Stack direction='horizontal' gap={1} className='align-items-center'>

                                            <Dropdown>
                                                <Dropdown.Toggle className='text-light text-decoration-none p-0' variant='link'>
                                                    {`${user.firstName} ${user.lastName}`}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item as={Link} to='/user/profile'>
                                                        <Stack direction='horizontal' gap={2}>
                                                            <BsPersonFill size={20} />
                                                            Profil
                                                        </Stack>
                                                    </Dropdown.Item>

                                                    <Dropdown.Item as={Link} to='/user/orders'>
                                                        <Stack direction='horizontal' gap={2}>
                                                            <BsCart3 size={20} />
                                                            Beställningar
                                                        </Stack>
                                                    </Dropdown.Item>

                                                    {user.isAdmin &&
                                                        <Dropdown.Item as={Link} to='/user/admin/orders'>
                                                            <Stack direction='horizontal' gap={2}>
                                                                <LuSettings2 size={20} />
                                                                Admin panel
                                                            </Stack>
                                                        </Dropdown.Item>
                                                    }

                                                    <Dropdown.Divider />

                                                    <Dropdown.Item onClick={logoutUser} as={Button}>
                                                        <Stack direction='horizontal' gap={2}>
                                                            <RxExit size={20} />
                                                            Logga ut
                                                        </Stack>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </Stack>
                                    </Stack>
                                )
                                :
                                (
                                    <OverlayTrigger show={show} trigger='click' placement='bottom-end' overlay={overlay}>

                                        <Stack direction='horizontal' className='align-items-center' gap={2}>
                                            <BsPerson onClick={() => { handleClose(); handleClick('login'); }} color='white' size={45} />
                                            <Stack className='align-items-start'>
                                                <Button onClick={() => { handleClose(); handleClick('login'); }} variant='link' className='p-0 border-0 fw-medium link-light link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Logga in</Button>
                                                <Button onClick={() => { handleClose(); handleClick('register'); }} variant='link' className='p-0 border-0 link-light link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Skapa konto</Button>
                                            </Stack>
                                        </Stack>

                                    </OverlayTrigger>
                                )
                            }

                            <Link to='/cart' style={{ position: 'relative' }}>
                                <Badge pill bg='success' style={{ position: 'absolute', top: '-5px', right: '-5px' }}>
                                    {totalCartQuantity >= 1 && totalCartQuantity}
                                </Badge>
                                <BsCart3 color='grey' size={37} />
                            </Link>

                        </Stack>

                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
