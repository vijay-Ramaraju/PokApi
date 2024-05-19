import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import PasswordGen from "./components/PasswordGen";
import MultiStatePractice from "./components/MultiStatePractice";
import IncrementTask from "./components/IncrementTask";
import StateAssign from "./components/StateAssign";
import Macbook from "./components/Macbook";
import MouseTracking from "./components/MouseTracking";
import ApiCall from "./components/ApiCall";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PasswordGen /> */}
      {/* <MultiStatePractice /> */}
      {/* <IncrementTask /> */}
      {/* <StateAssign /> */}
      {/* < Macbook /> */}
      {/* <MouseTracking /> */}
      <ApiCall />
    </>
  );
}

export default App;
