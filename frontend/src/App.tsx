import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import StickyNote from "./StickyNote/StickyNote";
import NewStickyNote from "./StickyNote/NewStickyNote";
import Dashboard from "./component/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
