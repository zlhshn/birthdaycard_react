import Lİst from "./List";
import data from "./data";
import "./App.css";
import { useState } from "react";

function App() {
const [people,setPeople] = useState(data)

  return (
    <main>
    <div className="container">
      <h3>{people.length} Birtdays Today</h3>
      <Lİst people= {people} />
      <button onClick={()=>setPeople([])}>Clear All</button>
    </div>
    </main>
  );
}

export default App;
