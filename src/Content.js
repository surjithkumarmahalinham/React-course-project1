import React from "react"

const Content = () => {

    function handleNameChange(){
        const names = ["vellore","chennai","thirunelveli"];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    
  return (
    
    <p>Welcome to {handleNameChange()}. Thank you for coming</p>

  )
}

export default Content