import React from "react";
import { useState } from "react";
const DynamicNameChange = () => {

    const [name, setName] = useState("India");

function handleNameChange(){
    const name = ["Us","Canada","Australia","Tailand"]
    const int = Math.floor(Math.random()*4);
    setName(name[int]);
}
    return(
        <main>
            <p>The clickable name is : {name}</p>
            <button onClick={handleNameChange}>Name change</button>
        </main>
    )
}

export default DynamicNameChange;