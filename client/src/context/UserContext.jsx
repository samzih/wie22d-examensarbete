import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';


const UserContext = createContext({
    show: false,
    setShow: () => { },
    registerUser: () => { },
    loginUser: () => { },
    user: {},
    logoutUser: () => { },
});


export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useLocalStorage('user', null);


    const closePopover = () => setShow(false);


    const registerUser = async (e) => {
        // Read the form data
        const form = e.target.form;
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
        }

        if (response.status === 409) {
            const responseData = await response.json();
            alert(responseData);
        }
    }


    const loginUser = async (e) => {
        // Read the form data
        const form = e.target.form;
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


    return (
        <div>
            <UserContext.Provider value={{ show, setShow, registerUser, loginUser, user, logoutUser }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}


export default UserProvider
