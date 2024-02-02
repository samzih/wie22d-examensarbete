import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsPersonFillLock } from 'react-icons/bs'


function Unauthorized() {
    return (
        <Container className='my-5'>
            <Container className='p-5 text-center bg-body-tertiary rounded-3'>
                <BsPersonFillLock size={150} />
                <h1 className='text-body-emphasis'>Obehörig</h1>
                <p className='text-muted'>Du har inte behörighet att se den här sidan.</p>
                <Button as={Link} to='/' className='px-3 mb-3 rounded-pill'>Tillbaka till startsidan</Button>
            </Container>
        </Container>
    )
}

export default Unauthorized
