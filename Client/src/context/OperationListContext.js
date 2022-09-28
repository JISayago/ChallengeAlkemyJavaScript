import React,{useState} from "react";

const Context = React.createContext({})

export function OperationListContextProvider({ children }) {
    const [operationList, setOperationList] = useState([]);

    return <Context.Provider value={{ operationList, setOperationList }}>
        {children}
    </Context.Provider>
}
export default Context;