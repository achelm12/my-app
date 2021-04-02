import './App.css';
import React, { useEffect, useState } from "react";
import SlidingButton from './SlidingButton.js'
import Button from './Button.js'

function App() {
  const [autoControl, setAutoControl] = useState(false);
  console.log(autoControl)
  return (
    <div className="App">
      <header className="Header">
          What would you like to do?
      </header>
      <SlidingButton autoControl={autoControl}/>
      <Button autoControl={autoControl} onAutoControl={setAutoControl}/>
    </div>
  );
}

export default App;
