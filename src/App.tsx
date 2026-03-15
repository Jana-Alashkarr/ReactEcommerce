import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  function changeName(event: any) {
    const value = event?.target.value;
    setName(value)
  }
  return (
   
      <div>
        <input type="text" onChange={changeName} />
        <p>{name}</p>
      </div>
    
  );
}

export default App;
