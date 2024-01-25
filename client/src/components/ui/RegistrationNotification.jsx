import { } from 'react'
import { Stack, Toast, ToastContainer } from 'react-bootstrap'
import { useUserContext } from '../../context/UserContext'
import { BsCheckCircleFill } from 'react-icons/bs'


function RegistrationNotification() {
    const { showNotif, setShowNotif } = useUserContext();

    return (
        <ToastContainer position='top-end' className='m-2 position-fixed'>
            <Toast className='text-light text-bg-success w-auto' onClose={() => setShowNotif(false)} show={showNotif} delay={2500} autohide>
                <Toast.Body>
                    <Stack direction='horizontal' gap={2}>
                        <BsCheckCircleFill size={23} />
                        <p className='m-0'>Ditt konto har skapats.</p>
                    </Stack>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}


export default RegistrationNotification
