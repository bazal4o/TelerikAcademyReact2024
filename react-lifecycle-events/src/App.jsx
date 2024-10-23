import { useState } from "react";
import "./App.css";
import LifeCyclesEvents from "./components/lifeCycleEvents/lifeCycleEvents";

function App() {
  const [enableCounter, setEnableCounter] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setEnableCounter(!enableCounter);
        }}
      >
        {enableCounter ? "Disable Counter" : "Enable Counter"}
      </button>
      {enableCounter && <LifeCyclesEvents />}
    </div>
  );
}

export default App;
