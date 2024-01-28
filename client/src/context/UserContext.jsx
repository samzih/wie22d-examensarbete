import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';


const UserContext = createContext({
    show: false,
    setShow: () => { },
    registerUser: () => { },
    loginUser: () => { },
    user: {},
    logoutUser: () => { },
    showNotif: false,
    setShowNotif: () => { },
    updateProfile: () => { },
    readOnly: true,
    setReadOnly: () => { },
});


export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useLocalStorage('user', null);
    const [showNotif, setShowNotif] = useState(false);
    const [readOnly, setReadOnly] = useState(true);


    const closePopover = () => setShow(false);


    const registerUser = async (e) => {
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Make it an object
        const formJson = Object.fromEntries(formData.entries());

        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        });

        if (response.ok) {
            closePopover();
            setShowNotif(true);
        }

        if (response.status === 409) {
            const responseData = await response.json();
            alert(responseData);
        }
    }


    const loginUser = async (e) => {
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Make it an object
        const formJson = Object.fromEntries(formData.entries());

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
        });

        if (response.ok) {
            closePopover();
            const data = await response.json();
            setUser(data);
        }
    }


    const logoutUser = async () => {
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            setUser(null);
        }
    }


    const updateProfile = async (e) => {
        // Profile form data
        const form = e.target;
        const formData = new FormData(form);

        // Make it an object
        const formJson = Object.fromEntries(formData.entries());

        // Don't make the req if values are unchanged
        if (formJson.firstName == user.firstName && formJson.lastName == user.lastName) {
            return setReadOnly(!readOnly);
        }

        const response = await fetch('/api/users/profile', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formJson),
        });

        if (response.ok) {
            const data = await response.json();
            setUser(data);
            setReadOnly(!readOnly);
        }
    }


    return (
        <div>
            <UserContext.Provider value={{ show, setShow, registerUser, loginUser, user, logoutUser, showNotif, setShowNotif, updateProfile, readOnly, setReadOnly }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserProvider
