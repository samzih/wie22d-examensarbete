import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Table, FormCheck, Row, Col } from 'react-bootstrap'
import { useOrderContext } from '../context/OrderContext'
import { useUserContext } from '../context/UserContext'
import formatDate from '../utils/formatDate'


function AdminOrders() {
    const { orders, getAllOrders, markAsSent } = useOrderContext();
    const { user } = useUserContext();
    const navigate = useNavigate();


    useEffect(() => {
        if (!user.isAdmin) {
            return navigate('/unauthorized');
        }

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
