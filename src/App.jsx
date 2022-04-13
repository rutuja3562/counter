import { useState } from 'react'
import './App.css'

import { Counter } from "./components/Count";
function App() {
 const [show,setShow] = useState("true")
  return (
    <div className="App">
      <Counter/>
      {/* <div>{show ? <Counter /> : null}</div> */}
     
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
       
        {show ? "Hide" : "Show"}
      </button> */}
    </div>
  );
}

export default App
