import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Listgroup from "./component/ListGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Listgroup />
    </div>
  );
}

export default App;
