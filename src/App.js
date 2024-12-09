// import Content from "./Content";
// import DynamicNameChange from "./DynamicNameChange";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Props_Drill from "./Props_Drill";

function App(){
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
  const handleDelete = (id) =>{
      const listItems = items.filter((item) =>
      item.id!==id)
      setItems(listItems)
      localStorage.setItem("to_do_list",JSON.stringify(listItems))
  }
  return(
    <div className="App">
     <Header title="Props and Props Drilling"/>
     {/*click event
      <Content /> */}
     {/*useState class 
     <Content_useState /> */}
     {/*useState namechange dynamically
      <DynamicNameChange /> */}
      {/*ListKey and icons
      <ListKey /> */}
     <Props_Drill title="Props and Props Drilling" items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
     <Footer />
    </div>
  )
}

export default App;