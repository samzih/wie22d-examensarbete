import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../components/layout/SideBar'
import { Col, Container, Row } from 'react-bootstrap'
import { useUserContext } from '../context/UserContext'


function User() {
    const { user } = useUserContext();
    const navigate = useNavigate();


    useEffect(() => {
        !user && navigate('/unauthorized');
    }, []);


    return (
        <>
            {user &&
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
            }
        </>
    )
}

export default User
