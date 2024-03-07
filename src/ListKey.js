import React from "react";
import { useState } from "react";

const ListKey =() => {
    
    const[items, setItems] = useState(
        [
            {
                id:1,
                checked: true,
                item:"Practice Coding"
            },
            {
                id:2,
                checked: true,
                item:"Play Cricket"
            },
            {
                id:3,
                checked: false,
                item:"Read about AI"
            }
        ]
    );
    // const numbers = [-2,-3,0,1,3,4];
    // const itemss = numbers.filter(n => n>=0).map(n=>({number:n}));
    
    // console.log(itemss);

    return(
        <main>
            <ul>
                {items.map((item)=>(
                   <li>
                    <input type="checkbox" checked = {item.checked} />
                    <label>{item.item}</label>
                    <button>Delete</button>
                   </li> 
                ))}
            </ul>
        </main>
    )
}

export default ListKey;