import { } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Card, } from 'react-bootstrap'


function FeaturedProductCard({ product }) {
    const { id, name, description, images } = product;

    return (
        <Card className='text-center border-0 rounded-3 bg-success bg-gradient bg-opacity-25 h-100'>
            <Card.Body>
                <Card.Title className='display-6'>{name}</Card.Title>
                <Card.Text className='mx-4'>{description}</Card.Text>
                <Link to={`/product/${id}`}>
                    <Button variant='primary' className='px-4 shadow'>{`Lär dig mer om ${name}`}</Button>
                </Link>
            </Card.Body>
            <Card.Img variant='bottom' src={images} className='my-4' />
        </Card>
    )
}


FeaturedProductCard.propTypes = {
    product: PropTypes.object,
}

export default FeaturedProductCard
