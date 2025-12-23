import { createContext, useEffect, useState } from "react"

const Context = createContext();

const AppContext = (props) => {
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false)



    const Apicall=async()=>{
        try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        return data
        } catch(e){
            console.error("Error in fetching :", e);
        }
    }

    const getLocalUser=()=>{
        const storedData=localStorage.getItem("users")
        return storedData ? JSON.parse(storedData) : []
    }

    

   
    useEffect(()=>{
        
       const loadUsers=async()=>{
        const apiuser=await Apicall()
        const localuser=getLocalUser()
        setUsers([...apiuser,...localuser])
       }
       loadUsers()
       console.log(users)
    }, [])

    const addUser = (newUser) => {
         const localUsers=getLocalUser()
          const updatedLocalUsers = [...localUsers, newUser]
        localStorage.setItem("users", JSON.stringify(updatedLocalUsers))
        setUsers(prev => [...prev, newUser])
        setOpenModal(false)
    }


    return (
        <Context.Provider value={{ users, addUser, openModal, setOpenModal }}>
            {props.children}
        </Context.Provider>
    );
}



export { Context, AppContext };