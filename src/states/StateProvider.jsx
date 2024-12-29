import { useState, createContext } from "react";
const StateContext = createContext();

function StateProvider({ children }) {

    const [blog, setBlog] = useState([]);
    const [renderFullBlog, setRenderFullBlog] = useState([]);

    return (
        <StateContext.Provider value={{ blog, setBlog, renderFullBlog, setRenderFullBlog }}>
            {children}
        </StateContext.Provider>
    );
}

export { StateContext, StateProvider };