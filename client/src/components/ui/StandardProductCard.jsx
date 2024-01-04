import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, ListGroup } from 'react-bootstrap'


function StandardProductCard(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <Card className='text-start border-0'>

            <div className='rounded-0 p-5 bg-light'>
                <Card.Img variant='top' src={props.img} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transition: 'ease-in-out 0.2s', transform: `${hovered ? 'scale(1.05)' : 'scale(1)'}` }} />
            </div>

            <ListGroup variant='flush'>

                <ListGroup.Item className='px-0'>
                    <Card.Title className='fw-bold'>{props.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted fw-normal'>{props.subtitle}</Card.Subtitle>
                </ListGroup.Item>

                <ListGroup.Item className='px-0'>
                    <Card.Text className='m-0 fw-bold small'>Nyckel Specifikationer</Card.Text>
                    <Card.Text className='m-0 small'>{props.cpu}</Card.Text>
                    <Card.Text className='m-0 small'>{props.gpu}</Card.Text>
                    <Card.Text className='m-0 small'>{props.ram}</Card.Text>
                </ListGroup.Item>

                <ListGroup.Item className='px-0 d-grid'>
                    <Card.Text className='font-monospace'>{`${props.price / 100} kr`}</Card.Text>
                    <Button variant='primary' size='lg' className='fw-medium'>Lägg i varukorg</Button>
                </ListGroup.Item>

            </ListGroup>

        </Card>
    )
}


StandardProductCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cpu: PropTypes.string,
    gpu: PropTypes.string,
    ram: PropTypes.string,
    price: PropTypes.number,
}

export default StandardProductCard
