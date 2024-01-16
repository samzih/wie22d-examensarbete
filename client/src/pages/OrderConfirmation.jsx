import { } from 'react'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import { BsBagCheck } from 'react-icons/bs'


function OrderConfirmation() {
    return (
        <Container className='text-center'>

            <Row className='mt-5 mb-4'>
                <Col>
                    <Stack gap={3} className='align-items-center'>
                        <BsBagCheck color='green' size={150} />
                        <h1 className='display-5'>Tack för din beställning!</h1>
                    </Stack>
                </Col>
            </Row>

            <Row>
                <Col className='mb-0'>
                    <Stack gap={2} className='align-items-center'>
                        <p>Ordernummer: {'#3OReONJXjIEuO6po1wgJVcNF'}</p>
                        <p>Din beställning på {'12 699'} kr har godkänts ✔</p>
                        <p>En bekräftelse har skickats till dig på {'johndoe@gmail.com'}</p>
                    </Stack>
                </Col>
            </Row>

            <Row>
                <Col className='mt-3 mb-5'>
                    <Stack gap={3} direction='horizontal' className='justify-content-center'>
                        <Button variant='success' className='px-3'>Återgå till butiken</Button>
                        <Button variant='outline-secondary' className='px-3'>Visa orderhistorik</Button>
                    </Stack>
                </Col>
            </Row>

            <Row>
                <Col className='text-secondary my-5'>
                    <p>Om du har några frågor eller funderingar är du välkommen att kontakta oss.</p>
                </Col>
            </Row>

        </Container>
    )
}


export default OrderConfirmation
