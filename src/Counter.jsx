import { useState } from "react"
//this is useState is called function or hook 
export default function Counter(){
    //state which will help you to do some functions say someone is liking your post,comment or deleting comments or anything like that will be done by this 
    const [count,setCount] =useState(0);
    const handleAdd=()=>{
        const newCount =count+1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        const newCount = count-1;
        setCount(newCount)
    }
    
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter :{count} </h3>
            <button onClick={handleAdd}> Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}