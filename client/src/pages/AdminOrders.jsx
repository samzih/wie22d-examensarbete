import { useEffect } from 'react'
import { Button, Container, Table, FormCheck, Row, Col } from 'react-bootstrap'
import { useOrderContext } from '../context/OrderContext'
import formatDate from '../utils/formatDate'


function AdminOrders() {
    const { orders, getAllOrders, markAsSent } = useOrderContext();


    useEffect(() => {
        getAllOrders();
    }, []);


    const handleCheckbox = (e, orderId) => {
        if (!e.target.checked) {
            return
        }

        markAsSent(orderId);
    }


    return (
        <>
            <Container>

                <Row>
                    <Col>
                        <h1 className='display-5'>Admin panel</h1>
                        <p className='text-muted'>Hantera alla beställningar</p>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Ordernummer</th>
                                    <th>Orderdatum</th>
                                    <th>Kundnamn</th>
                                    <th>E-postadress</th>
                                    <th>Orderbelopp</th>
                                    <th className='text-center'>Skickad</th>
                                    <th className='text-center'>Åtgärder</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.orderNumber} className='align-middle'>
                                        <td>{order.orderNumber}</td>
                                        <td>{formatDate(order.created)}</td>
                                        <td>{`${order.customer.firstName} ${order.customer.lastName}`}</td>
                                        <td>{order.customer.email}</td>
                                        <td>{order.totalOrderPrice} kr</td>
                                        <td className='text-center'>
                                            <FormCheck name='sent' type='checkbox' checked={order.isSent} onChange={(e) => handleCheckbox(e, order._id)} />
                                        </td>
                                        <td className='text-center'>
                                            <Button variant='secondary' className='text-light'>Orderdetaljer</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default AdminOrders
