// import Content from "./Content";
// import DynamicNameChange from "./DynamicNameChange";
import Footer from "./Footer";
import Header from "./Header";
import ListKey from "./ListKey";

function App(){

  return(
    <div className="App">
     <Header />
     {/*click event
      <Content /> */}
     {/*useState class 
     <Content_useState /> */}
     {/*useState namechange dynamically
      <DynamicNameChange /> */}
     <ListKey />
     <Footer />
    </div>
  )
}

export default App;