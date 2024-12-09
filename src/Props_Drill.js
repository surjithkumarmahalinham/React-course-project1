import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const Props_Drill =({items,handleCheck,handleDelete}) => {
    
    
    return(
        <main>
            {(items.length) ? (
            <ul>
                {items.map((item)=>(
                   <li className="item" key={item.id}>
                    <input type="checkbox" checked = {item.checked} onChange={()=>handleCheck(item.id)}/>
                    <label onClick={()=>handleCheck(item.id)} style={(item.checked) ? {textDecoration:'line-through'} : null}>{item.item}</label>
                    <FaTrashAlt rol="button" tabIndex={0} onClick={()=> handleDelete(item.id)} />
                   </li> 
                ))}
            </ul>
            ) : (
            <p>Your list is empty</p>
            )}
        </main>
    )
}

export default Props_Drill;