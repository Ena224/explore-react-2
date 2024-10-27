import { useEffect, useState } from "react"

export default function Users(){
    // declaring state for an empty array 
    const [users,setUsers]=useState([])
    // useEffect(()=>{},[])
    // const abc=()=>{}
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
}
/**
 * 1.Declare a state to hold the data
 * 2.useEffect with callback and dependency array (callback function and dependency)
 * 3.Use fetch to load data
 * 4.To set the fetched data in the state
 */