import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const TeamStyle={
        border: '2px solid purple',
        margin :'13px',
        padding:'15px',
        borderRadius:'15px'
    }
    const handleAdd=()=>{
        const newTeam= team+1;
        setTeam(newTeam);
    }
    const handleReduce=()=>{
        const newTeam= team-1;
        setTeam(newTeam);
    }
    return(
        <div style={TeamStyle}>
            <h3>Players :{team}</h3>
            <button onClick={handleAdd}> Click to add Player </button>
            <button onClick={handleReduce}> Click to reduce Player </button>
        </div>
    )
}