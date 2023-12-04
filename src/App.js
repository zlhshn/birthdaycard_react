import Lİst from "./List";
import data from "./data";
import "./App.css";
import { useState } from "react";

function App() {
const [people,setPeople] = useState(data)

  return (
    <div className="container">
      <Lİst people= {people} />
      <button onClick={()=>setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
