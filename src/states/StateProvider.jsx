import { useState, createContext } from "react";
const StateContext = createContext();

function StateProvider({ children }) {

    const [blog, setBlog] = useState([]);

    return (
        <StateContext.Provider value={{ blog, setBlog }}>
            {children}
        </StateContext.Provider>
    );
}

export { StateContext, StateProvider };