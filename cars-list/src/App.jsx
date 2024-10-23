import "./App.css";
import Cars from "./components/cars/cars";
import StateCar from "./components/stateCar/stateCar";
import { default as carsCollection } from "./Cars";

function App() {
  return (
    <div className="App">
      <h2>Cars List</h2>
      <Cars cars={carsCollection} />
      <h2>State Car</h2>
      <StateCar />
    </div>
  );
}

export default App;
