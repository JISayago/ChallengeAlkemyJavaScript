import React,{useState} from "react";

const Context = React.createContext({})

export function UserLoggedContextProvider({ children }) {
    const [userLogged, setUserLogged] = useState({
        id: 0,
        email: "guest@gmail.com",
        userName: "guest"
    });

    return <Context.Provider value={{ userLogged, setUserLogged }}>
        {children}
    </Context.Provider>
}
export default Context;