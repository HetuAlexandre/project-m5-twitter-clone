import React, { useEffect, useState } from "react";



export const CurrentUserContext = React.createContext(null);
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");
        useEffect(() => {
            fetch("/api/me/profile")
            .then(res => res.json())
            .then(res =>{
                setCurrentUser(res.data)
                setStatus("idle")
            })
        }, []);
    // Fetch the user data from the API (/me/profile)
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`

    return (
        <CurrentUserContext.Provider 
        value={{
            setCurrentUser,
            currentUser,
            status, 
            }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
