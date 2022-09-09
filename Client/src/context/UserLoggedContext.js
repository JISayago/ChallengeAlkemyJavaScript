import React,{useState} from "react";

const Context = React.createContext({})

export function UserLoggedContextProvider({ children }) {
    const [userLogged, setUserLogged] = useState({
        userName: "guest",
        password: "123",
        email:"guest@gmail.com"
    });

    return <Context.Provider value={{ userLogged, setUserLogged }}>
        {children}
    </Context.Provider>
}
export default Context;