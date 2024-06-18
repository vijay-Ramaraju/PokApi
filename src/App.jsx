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
import UseRef from './components/UseRef'

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
      <UseRef />
    </>
  );
}

export default App;
