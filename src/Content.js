import React from "react"

const Content = () => {

    function handleNameChange(){
      const names = ["vellore","chennai","thirunelveli"];
      const int = Math.floor(Math.random()*3);
      return names[int];
    }

    const handleClick = (e) =>{
      console.log(e);
    }
    const handleClick2 = (name) =>{
      console.log(`Thanks for click this button ${name}`);
    }
    
  return (
    <main>
      <p onDoubleClick={() => handleClick2("surjith")}>Welcome to {handleNameChange()}. Thank you for coming</p>
      <button onClick={(e) => handleClick(e)}>Click here</button>
      <button onClick={() => handleClick2('msk')}>Click with name</button>
    </main>
  )
}

export default Content