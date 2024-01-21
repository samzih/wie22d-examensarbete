import { } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

import { FaHandHoldingDollar } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FiThumbsUp } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";


function SalesPitch() {
    return (
        <Card bg='dark' text='light' className='text-center border-0 py-5'>
            <Card.Body className='m-5'>
                <Row className='align-items-center'>
                    <Col>
                        <Stack gap={4}>

                            <Stack gap={3} className='align-items-start text-start'>
                                <Card.Title className='display-5 fw-bold'>Varför gå med oss?</Card.Title>
                                <Card.Text className='fs-5 pe-5'>
                                    Våra datorer är inte bara byggda av experter, de är också designade av dem! ByteBreeze förbyggda datorer är gjorda med budget och erfarenhet i åtanke.
                                </Card.Text>
                            </Stack>

                            <Stack gap={5}>
                                <Stack direction='horizontal' gap={4} className='align-items-start'>
                                    <div>
                                        <FiDollarSign size={60} />
                                    </div>
                                    <Stack direction='vertical' gap={1} className='align-items-start me-5'>
                                        <Card.Subtitle className='fs-5 fw-medium'>Pris</Card.Subtitle>
                                        <Card.Text className='text-start fs-5'>Spara på byggavgifter och kostnaden för att köpa delar separat.</Card.Text>
                                    </Stack>
                                </Stack>

                                <Stack direction='horizontal' gap={4} className='align-items-start'>
                                    <div>
                                        <FiThumbsUp size={60} />
                                    </div>
                                    <Stack direction='vertical' gap={1} className='align-items-start me-5'>
                                        <Card.Subtitle className='fs-5 fw-medium'>Kvalitet</Card.Subtitle>
                                        <Card.Text className='text-start fs-5'>Få samma högkvalitativa komponenter som när du köper en anpassad PC.</Card.Text>
                                    </Stack>
                                </Stack>

                                <Stack direction='horizontal' gap={4} className='align-items-start'>
                                    <div>
                                        <HiOutlineWrenchScrewdriver size={60} />
                                    </div>
                                    <Stack direction='vertical' gap={1} className='align-items-start me-5'>
                                        <Card.Subtitle className='fs-5 fw-medium'>Bekvämlighet</Card.Subtitle>
                                        <Card.Text className='text-start fs-5'>Våra förbyggda datorer är sammansatta av experter, med en enkel serie produkter att välja mellan.</Card.Text>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>
                    </Col>

                    <Col>
                        <Card.Img variant='top' src='/pc-front.png' style={{ transform: 'scale(1.2)' }} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}


export default SalesPitch
