import "./App.css";

import List from "./List";
import Clock from "./Clock";
import Count from "./Count";

const list = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 3, name: "three" },
  { id: 4, name: "four" },
  { id: 5, name: "three" },
  { id: 6, name: "four" },
  { id: 7, name: "two" },
  { id: 8, name: "three" },
];

function App() {
  return (
    <div className="App">
      <Clock initTime={new Date()} />
      <Count />
      <List list={list} />
    </div>
  );
}

export default App;
