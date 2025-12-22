import { createContext, useState } from "react";

const Context = createContext();

const AppContext = (props) => {
    const [user,setUser] = useState('KGFJGFKJ');
   
    const value = { user };
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, AppContext };