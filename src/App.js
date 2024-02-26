function App(){

  function handleNameChange(){
    const names = ["vellore","chennai","thirunelveli"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return(
    <div>
      Welcome to {handleNameChange()}
      <p>Thank you for coming</p>
    </div>
  )
}

export default App;