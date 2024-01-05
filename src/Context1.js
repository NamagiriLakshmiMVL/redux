import React, { useState } from "react";
import { createContext } from "react";

export let UserContext1 = createContext()

export const ContextProvider=({children})=> {
    const [count,setCount]=useState(0)
    return (
        <UserContext1.Provider value={{ count,setCount }}>
        {children}
    </UserContext1.Provider>
       
    )
}

