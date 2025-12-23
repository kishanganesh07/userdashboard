import { createContext, useEffect, useState } from "react"

const Context = createContext();

const AppContext = (props) => {
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false)
   
    useEffect(()=>{
        const Apicall=async()=>{
            try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await response.json()
            setUsers(data)
            } catch(e){
                console.error("Error in fetching :", e);
            }
        }
        Apicall()
    }, [])
    const addUser = (newUser) => {
    setUsers(prev => [...prev, newUser])
    setOpenModal(false)
  }
    return (
        <Context.Provider value={{ users, addUser, openModal, setOpenModal }}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, AppContext };