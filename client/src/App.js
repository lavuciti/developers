import React, {useEffect, useState} from "react";

function App(){
    const[developers, setDevelopers] = useState([]);

    useEffect(() =>{
        fetch("/data/developers")
        .then(res=> res.json())
        .then(developers => {
            setDevelopers(developers);
        })
    })

    return(
        <div>
            {developers.map(developer=>{
                return(
                    <h1 key={developer.id}>{developer.name}</h1>
                )
            })}
        </div>
    )
}

export default App