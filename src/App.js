import { useState } from "react";
import Routes from "./routes";


function App() {

  // const [counter,setCounter] = useState(0);
  // function increment(){
  //   setCounter(counter+1);
  // }
  /*    <div>
        contador:{counter}
      </div>
      <button onClick={increment}>Incremento</button>*/

  
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
