import { } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function FeaturedProductCard(props) {
    return (
        <Card className='text-center border-0 rounded-3 bg-success bg-gradient bg-opacity-25 h-100'>
            <Card.Body>
                <Card.Title className='display-6'>{props.title}</Card.Title>
                <Card.Text className='mx-4'>{props.text}</Card.Text>
                <Link to={`/product/${props.id}`}>
                    <Button variant='primary' className='px-4 shadow'>{`Lär dig mer om ${props.title}`}</Button>
                </Link>
            </Card.Body>
            <Card.Img variant='bottom' src={props.img} className='my-4' />
        </Card>
    )
}


FeaturedProductCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string
}

export default FeaturedProductCard
