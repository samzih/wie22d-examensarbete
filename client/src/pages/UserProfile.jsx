import { useState } from 'react'
import { Row, Col, Container, Image, Stack, Form, InputGroup, Button } from 'react-bootstrap'
import { useUserContext } from '../context/UserContext'
import { BsPencilSquare } from 'react-icons/bs'
import avatar from '/default-avatar.jpg'


function UserProfile() {
    const { user, updateProfile, readOnly, setReadOnly } = useUserContext();


    const handleEdit = () => {
        setReadOnly(false);
    }


    const submitUpdate = (e) => {
        e.preventDefault();

        updateProfile(e);
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='display-5'>Profil</h1>
                        <p className='text-muted'>Hantera dina profilinställningar</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Stack gap={4} className='align-items-center'>
                            <Image className='object-fit-cover' width={200} height={200} src={avatar} roundedCircle />

                            <Form onReset={() => setReadOnly(true)} onSubmit={submitUpdate} id='profileForm' className='w-50'>
                                <Form.Group className='mb-3' controlId='firstName'>
                                    <Form.Label>Förnamn</Form.Label>
                                    <InputGroup>
                                        <Form.Control name='firstName' type='text' readOnly={readOnly} defaultValue={user && user.firstName} />
                                        <Button id='edit-btn-1' active={!readOnly} onClick={handleEdit}>
                                            <BsPencilSquare size={20} />
                                        </Button>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='lastName'>
                                    <Form.Label>Efternamn</Form.Label>
                                    <InputGroup>
                                        <Form.Control name='lastName' type='text' readOnly={readOnly} defaultValue={user && user.lastName} />
                                        <Button id='edit-btn-2' active={!readOnly} onClick={handleEdit}>
                                            <BsPencilSquare size={20} />
                                        </Button>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='email'>
                                    <Form.Label>E-postadress</Form.Label>
                                    <Form.Control type='email' autoComplete='off' disabled defaultValue={user && user.email} className='text-muted' />
                                    <Form.Text>
                                        Du kan inte ändra din e-postadress.
                                    </Form.Text>
                                </Form.Group>
                            </Form>
                            {!readOnly &&
                                <div className='d-flex justify-content-end w-50 gap-3'>
                                    <Button type='reset' form='profileForm' variant='outline-danger'>Avbryt</Button>
                                    <Button type='submit' form='profileForm' variant='success'>Spara ändringar</Button>
                                </div>
                            }
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile
