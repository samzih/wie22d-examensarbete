import { } from 'react'
import { Container, Row, Col, Card, Stack, ListGroup } from 'react-bootstrap'


function UserOrders() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='display-5'>Beställningar</h1>
                        <p className='text-muted'>Dina senaste beställningar</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header className='text-bg-secondary fw-medium'>
                                <Stack direction='horizontal' gap={2}>
                                    <p className='m-0'>Ordernummer:</p>
                                    <p className='m-0'>4325345345</p>
                                </Stack>
                            </Card.Header>

                            <Card.Header className='bg-light-subtle'>
                                <Stack direction='horizontal' gap={2}>
                                    <p className='m-0'>Orderstatus:</p>
                                    <p className='m-0 fw-medium'>Betald/Behandlas</p>
                                </Stack>
                            </Card.Header>

                            <Card.Body>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item className='py-3'>
                                        <Stack direction='horizontal' gap={2}>
                                            <Card.Img src='https://skytechgaming.com/wp-content/uploads/2023/01/ST-Siege4-0559-B-NE-hero-rgb-copy-600x600.webp' style={{ maxWidth: 100 }} />
                                            <Stack direction='vertical' className='justify-content-center'>
                                                <Card.Title>Produktnamn</Card.Title>
                                                <Card.Text>1 st för 13 699 kr</Card.Text>
                                            </Stack>
                                        </Stack>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>

                            <Card.Footer className='py-1'>
                                <Stack direction='horizontal' gap={2}>
                                    <p className='m-0'>Beställningsdatum:</p>
                                    <p className='m-0'>2024-01-27 18:41</p>
                                </Stack>
                            </Card.Footer>

                            <Card.Footer className='bg-secondary-subtle'>
                                <Stack direction='horizontal' gap={2}>
                                    <p className='m-0'>Totalsumma:</p>
                                    <p className='m-0'>13 699 kr</p>
                                </Stack>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserOrders
