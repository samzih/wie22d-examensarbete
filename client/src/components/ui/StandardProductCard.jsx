import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useCartContext } from '../../context/CartContext'
import { Button, Card, ListGroup } from 'react-bootstrap'


function StandardProductCard({ product }) {
    const { id, images, name, description } = product;
    const { processor, graphics, ram } = product.metadata;
    const { unit_amount } = product.default_price;

    const { addToCart } = useCartContext();
    const [hovered, setHovered] = useState(false);


    return (
        <Card className='text-start border-0'>

            <div className='rounded-0 p-5 bg-light'>
                <Link to={`/product/${id}`}>
                    <Card.Img variant='top' src={images} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ transition: 'ease-in-out 0.2s', transform: `${hovered ? 'scale(1.05)' : 'scale(1)'}` }} />
                </Link>
            </div>

            <ListGroup variant='flush'>

                <ListGroup.Item className='px-0'>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted fw-normal'>{description}</Card.Subtitle>
                </ListGroup.Item>

                <ListGroup.Item className='px-0 small'>
                    <Card.Text className='m-0 fw-bold fs-6'>Nyckel Specifikationer</Card.Text>
                    <Card.Text className='m-0'>{processor}</Card.Text>
                    <Card.Text className='m-0'>{graphics}</Card.Text>
                    <Card.Text className='m-0'>{ram}</Card.Text>
                </ListGroup.Item>

                <ListGroup.Item className='px-0 d-grid'>
                    <Card.Text className='font-monospace'>{`${unit_amount / 100} kr`}</Card.Text>
                    <Button onClick={() => { addToCart(product) }} variant='primary' size='lg' className='fw-medium'>Lägg i varukorg</Button>
                </ListGroup.Item>

            </ListGroup>

        </Card>
    )
}


StandardProductCard.propTypes = {
    product: PropTypes.object,
}

export default StandardProductCard
