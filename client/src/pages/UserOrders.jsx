import { useEffect } from 'react'
import { Container, Row, Col, Card, Stack, ListGroup } from 'react-bootstrap'
import { useOrderContext } from '../context/OrderContext'
import { useUserContext } from '../context/UserContext'
import formatDate from '../utils/formatDate'


function UserOrders() {
    const { user } = useUserContext();
    const { getOrders, userOrders } = useOrderContext();


    useEffect(() => {
        getOrders();
    }, [user]);


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
                        <Stack gap={5}>
                            {userOrders.map(order => {
                                const { orderNumber, isSent, orderItems, created, totalOrderPrice } = order;

                                return (
                                    <Card key={orderNumber}>
                                        <Card.Header className='text-bg-secondary fw-medium'>
                                            <Stack direction='horizontal' gap={2}>
                                                <p className='m-0'>Ordernummer:</p>
                                                <p className='m-0'>{orderNumber}</p>
                                            </Stack>
                                        </Card.Header>

                                        <Card.Header className='bg-light-subtle'>
                                            <Stack direction='horizontal' gap={2}>
                                                <p className='m-0'>Orderstatus:</p>
                                                <p className='m-0 fw-medium'>{isSent ? 'Skickad' : 'Behandlas'}</p>
                                            </Stack>
                                        </Card.Header>

                                        <Card.Body>
                                            <ListGroup variant='flush'>

                                                {orderItems.map((item, id) => (
                                                    <ListGroup.Item key={id} className='py-3'>
                                                        <Stack direction='horizontal' gap={2}>
                                                            <Card.Img src={item.image} style={{ maxWidth: 100 }} />
                                                            <Stack direction='vertical' className='justify-content-center'>
                                                                <Card.Title>{item.product}</Card.Title>
                                                                <Card.Text>
                                                                    {item.quantity} st för {item.totalPrice} kr {item.quantity > 1 && <span className='small fst-italic text-secondary'>({item.unitPrice} kr/st)</span>}
                                                                </Card.Text>
                                                            </Stack>
                                                        </Stack>
                                                    </ListGroup.Item>
                                                ))}

                                            </ListGroup>
                                        </Card.Body>

                                        <Card.Footer className='py-1'>
                                            <Stack direction='horizontal' gap={2}>
                                                <p className='m-0'>Beställningsdatum:</p>
                                                <p className='m-0'>{formatDate(created)}</p>
                                            </Stack>
                                        </Card.Footer>

                                        <Card.Footer className='bg-secondary-subtle'>
                                            <Stack direction='horizontal' gap={2}>
                                                <p className='m-0'>Totalsumma:</p>
                                                <p className='m-0'>{totalOrderPrice} kr</p>
                                            </Stack>
                                        </Card.Footer>
                                    </Card>
                                )
                            })}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserOrders
