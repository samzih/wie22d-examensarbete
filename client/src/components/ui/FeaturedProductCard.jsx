import {  } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, } from 'react-bootstrap'


function FeaturedProductCard(props) {
    return (
        <Card className='text-center border-0 rounded-3 bg-success bg-gradient bg-opacity-25'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className='mx-4'>{props.text}</Card.Text>
                <Button variant='primary' className='px-4 shadow'>{`Shop ${props.title}`}</Button>
            </Card.Body>
            <Card.Img variant='bottom' src={props.img} className='my-4' />
        </Card>
    )
}


FeaturedProductCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string
}

export default FeaturedProductCard
