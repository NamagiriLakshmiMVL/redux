import { useState, createContext } from "react"

export let UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    return (
        <UserContext.Provider value={{ cart, setCart }}>
            {children}
        </UserContext.Provider>
    )
}