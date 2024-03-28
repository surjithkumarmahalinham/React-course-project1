import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
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
    const handleCheck = (id) =>{
        const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
        setItems(listItems);
        localStorage.setItem("to_do_list",JSON.stringify(listItems))
    }
    const handledelete = (id) =>{
        const listItems = items.filter((item) =>
        item.id!==id)
        setItems(listItems)
        localStorage.setItem("to_do_list",JSON.stringify(listItems))
    }
    return(
        <main>
            {(items.length) ? (
            <ul>
                {items.map((item)=>(
                   <li className="item" key={item.id}>
                    <input type="checkbox" checked = {item.checked} onChange={()=>handleCheck(item.id)}/>
                    <label onClick={()=>handleCheck(item.id)} style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
                    <FaTrashAlt rol="button" tabIndex={0} onClick={()=> handledelete(item.id)} />
                   </li> 
                ))}
            </ul>
            ) : (
            <p>Your list is empty</p>
            )}
        </main>
    )
}

export default ListKey;