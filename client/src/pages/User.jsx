import { } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/layout/SideBar'
import { Col, Container, Row } from 'react-bootstrap'


function User() {
    return (
        <>
            <Container fluid>
                <Row className='min-vh-100'>
                    <Col sm={3} className='p-3 text-bg-dark'>
                        <SideBar />
                    </Col>
                    <Col sm={9} className='p-5'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default User
