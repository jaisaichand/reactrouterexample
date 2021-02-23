import { createContext, useState } from "react";

export const mainContext = createContext();

export const mainProvider = (props) => {
    const [mainstate, setMainstate] = useState(['jai', 'sai']);
    return (
        <mainContext.Provider value={[mainstate, setMainstate]}>
            {props.children}
        </mainContext.Provider>
    )
}