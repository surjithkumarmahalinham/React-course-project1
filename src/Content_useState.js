import React, { useState } from "react"

const Content_useState = () => {
    function names(){
      return console.log("hi msk");
    }
   const [count, setCount] = useState(99);
   function increment(){
    setCount((preCount)=> {return preCount +1 })
  }
  function decrement(){
    setCount((deCount)=> {return deCount -1 })
  }
  return (
    <main>
      <p>Lets use Quantity</p>  
      <button>Quantity</button>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </main>
  )
}

export default Content_useState;