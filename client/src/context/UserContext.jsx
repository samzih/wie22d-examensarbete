import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({
    registerUser: () => { },
    show: false,
    setShow: () => { },
});


export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
    const [show, setShow] = useState(false);


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


    return (
        <div>
            <UserContext.Provider value={{ registerUser, show, setShow }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}


export default UserProvider
