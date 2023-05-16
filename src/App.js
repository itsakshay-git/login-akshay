import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function App() {
  const [loggedin, setloggedin] = useState(false)
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <Outlet context={{loggedin , setloggedin}}/>
    </div>
  );
}

export default App;
