import { useState } from 'react'
import { Row, Col, Container, Image, Stack, Form, InputGroup, Button } from 'react-bootstrap'
import { useUserContext } from '../context/UserContext'
import { BsPencilSquare } from 'react-icons/bs'


function UserProfile() {
    const { user } = useUserContext();
    const [readOnly, setReadOnly] = useState(true);


    const handleEdit = () => {
        setReadOnly(false);
    }


    const submitEdit = (e) => {
        e.preventDefault();

        setReadOnly(!readOnly);
    }


    return (
        <>
            <Row>
                <Col>
                    <h1 className='display-5'>Profil</h1>
                    <p className='text-muted'>Hantera dina profilinställningar</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Stack gap={4} className='align-items-center'>
                        <Image className='object-fit-cover' width={200} height={200} src='' roundedCircle />

                        <Form onReset={() => setReadOnly(true)} onSubmit={submitEdit} id='profileForm' className='w-50'>
                            <Form.Group className='mb-3' controlId='firstName'>
                                <Form.Label>Förnamn</Form.Label>
                                <InputGroup>
                                    <Form.Control type='text' readOnly={readOnly} defaultValue={user && user.firstName} />
                                    <Button id='edit-btn-1' active={!readOnly} onClick={handleEdit}>
                                        <BsPencilSquare size={20} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='lastName'>
                                <Form.Label>Efternamn</Form.Label>
                                <InputGroup>
                                    <Form.Control type='text' readOnly={readOnly} defaultValue={user && user.lastName} />
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
        </>
    )
}

export default UserProfile
