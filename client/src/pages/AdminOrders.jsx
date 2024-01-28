import { } from 'react'
import { Button, Container, Table, FormCheck, Row, Col } from 'react-bootstrap'


function AdminOrders() {
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
                                <tr className='align-middle'>
                                    <td>4738562289</td>
                                    <td>2024-01-28 17:55</td>
                                    <td>Förnamn Efternamn</td>
                                    <td>förnamn.efternamn@gmail.com</td>
                                    <td>12 999 kr</td>
                                    <td className='text-center'>
                                        <FormCheck id='shipped' type='radio' />
                                    </td>
                                    <td className='text-center'>
                                        <Button variant='secondary' className='text-light'>Orderdetaljer</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default AdminOrders
