import { createContext, useState } from "react";

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        adress: ''
    })

    const checkForUser = () => {
        return user.firstName || false
    }

    return(
        <UserContext.Provider value={{
            checkForUser,
            setUser,
            user
            }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext